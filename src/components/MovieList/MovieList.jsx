import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import styles from './MovieList.module.scss'
import MovieItem from '../MovieItem/MovieItem'

const MovieList = ({ data, title }) => {
  return (
    <div className={styles.wrapper}>
      {title && (
        <h2 className={styles.title}>{title.replace(' on Loklok', '')}</h2>
      )}

      <div className={styles.content}>
        <Swiper
          spaceBetween={10}
          slidesPerView={'auto'}
          speed={500}
          grabCursor={true}
        >
          {data.map((movie) => (
            <SwiperSlide className={styles.slide} key={movie.id}>
              <MovieItem movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default MovieList
