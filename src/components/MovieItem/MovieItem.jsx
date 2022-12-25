import { Link } from 'react-router-dom'

import imageResizing from '../../services/imageResizing'
import styles from './MovieItem.module.scss'
import Image from '../Image/Image'

const MovieItem = ({ movie }) => {
  let link, movieCover, movieTitle

  if (movie.episode) {
    movie.contentType === 'MOVIE'
      ? (link = `/0/${movie.id}?episode=${movie.episode}`)
      : (link = `/1/${movie.id}?episode=${movie.episode}`)
  } else {
    movie.contentType === 'MOVIE'
      ? (link = `/0/${movie.id}`)
      : (link = `/1/${movie.id}`)
  }

  movie.title ? (movieTitle = movie.title) : (movieTitle = movie.name)

  if (movie.imageUrl) {
    movieCover = imageResizing(movie.imageUrl)
  } else if (movie.coverVerticalUrl) {
    movieCover = imageResizing(movie.coverVerticalUrl)
  } else {
    movieCover = imageResizing(movie.cover)
  }

  return (
    <Link to={link}>
      <div className={styles.wrapper}>
        <Image src={movieCover} alt={movieTitle} />
        <div className={styles.hover}>
          <h3 className={styles.title}>{movieTitle}</h3>
        </div>
      </div>
    </Link>
  )
}

export default MovieItem
