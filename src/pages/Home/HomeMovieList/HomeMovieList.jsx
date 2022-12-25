import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import styles from './HomeMovieList.module.scss'
import * as movieApi from '../../../services/movieApi'
import MovieList from '../../../components/MovieList/MovieList'
import { AiOutlineLoading3Quarters as LoadingIcon } from 'react-icons/ai/'

const HomeMovieList = () => {
  const [homeMovieList, setHomeMovieList] = useState([])
  const [pageIndex, setPageIndex] = useState(0)
  const [dataEnded, setDataEnded] = useState(false)

  const fetchData = async () => {
    const response = await movieApi.getHome(pageIndex)

    const data = response.recommendItems.filter(
      (section) => section.homeSectionType === 'SINGLE_ALBUM'
    )

    if (data.length > 0) {
      setHomeMovieList((prev) => [...prev, ...data])
      setPageIndex((prev) => prev + 1)
    } else {
      setDataEnded(true)
      return
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  // console.log(homeMovieList)

  return (
    <div className={styles.wrapper}>
      <InfiniteScroll
        dataLength={homeMovieList.length}
        next={fetchData}
        hasMore={!dataEnded}
        loader={
          <div className={styles.loading}>
            <LoadingIcon className={styles.loadingIcon} />
          </div>
        }
      >
        {homeMovieList.map((item) => (
          <MovieList
            key={item.homeSectionId}
            title={item.homeSectionName}
            data={item.recommendContentVOList}
          />
        ))}
      </InfiniteScroll>
    </div>
  )
}

export default HomeMovieList
