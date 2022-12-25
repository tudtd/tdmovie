import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { useParams, Link, useSearchParams } from 'react-router-dom'
import ReactHlsPlayer from 'react-hls-player'

import * as movieApi from '../../services/movieApi'
import styles from './Detail.module.scss'
import MovieInfo from './MovieInfo/MovieInfo'
import MovieSimilar from './MovieSimilar/MovieSimilar'
import subtitleConvert from '../../services/subtitleConverter'
import DefaultLayout from '../../layouts/DefaultLayout/DefaultLayout'

const Detail = () => {
  const { category, id } = useParams()
  const [searchParams] = useSearchParams()
  const episode = searchParams.get('episode')

  const [detail, setDetail] = useState({})
  const [media, setMedia] = useState({})
  const [subtitles, setSubtitles] = useState([])
  const [isFavorited, setIsFavorited] = useState(false)

  const [favorites, setFavorites] = useState(() => {
    const fav = JSON.parse(localStorage.getItem('favorites'))
    fav && fav.forEach((movie) => movie.id === id && setIsFavorited(true))
    return fav || []
  })

  const playerRef = useRef()

  const addToFavorites = () => {
    let contentType
    detail.category === 0 ? (contentType = 'MOVIE') : (contentType = 'DRAMA')
    setFavorites(() => [...favorites, { ...detail, contentType: contentType }])
    setIsFavorited(true)
  }

  const removeFromFavorites = () => {
    setFavorites(() => favorites.filter((movie) => movie.id !== id))
    setIsFavorited(false)
  }

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  useEffect(() => {
    const getMovie = async () => {
      const response = await movieApi.getMovie(category, id, episode)

      let newMedia
      if (response.media.mediaUrl.startsWith('http:')) {
        console.log('Media link startsWith http.')
        newMedia = {
          ...response.media,
          mediaUrl: response.media.mediaUrl.replace('http', 'https'),
        }
      } else {
        newMedia = { ...response.media }
        console.log('Media link startsWith https.')
      }

      setDetail(response.detail)
      // setMedia(response.media)
      setMedia(newMedia)
      setSubtitles(
        response.subtitles[0].subtitlingList.filter(
          (sub) => sub.languageAbbr === 'en' || sub.languageAbbr === 'vi'
        )
      )
    }

    getMovie()
  }, [category, id, episode])

  return (
    <DefaultLayout>
      <div className={styles.wrapper}>
        <div className={styles.backBtn}>
          <Link to="/">{`< Back`}</Link>
        </div>

        <ReactHlsPlayer
          className={styles.player}
          crossOrigin="anonymous"
          src={media.mediaUrl}
          autoPlay={false}
          controls={true}
          width="100%"
          playerRef={playerRef}
        >
          {subtitles &&
            subtitles.map((sub) => {
              let subtitle = null
              if (sub.languageAbbr === 'vi') {
                subtitle = (
                  <track
                    key={sub.languageAbbr}
                    kind="subtitles"
                    src={subtitleConvert(sub.subtitlingUrl)}
                    label={sub.language}
                    srcLang={sub.languageAbbr}
                    default
                  ></track>
                )
              } else {
                subtitle = (
                  <track
                    key={sub.languageAbbr}
                    kind="subtitles"
                    src={subtitleConvert(sub.subtitlingUrl)}
                    label={sub.language}
                    srcLang={sub.languageAbbr}
                  ></track>
                )
              }
              return subtitle
            })}
        </ReactHlsPlayer>

        <MovieInfo
          detail={detail}
          media={media}
          isFavorited={isFavorited}
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
        />
        <MovieSimilar detail={detail} />
      </div>
    </DefaultLayout>
  )
}

export default Detail
