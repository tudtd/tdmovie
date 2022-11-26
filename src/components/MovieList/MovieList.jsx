import { Swiper, SwiperSlide } from 'swiper/react'
import classNames from 'classnames/bind'
import 'swiper/css'

import styles from './MovieList.module.scss'
import MovieItem from '../MovieItem/MovieItem'

const cx = classNames.bind(styles)

const MovieList = ({ data, title }) => {
  // console.log(data)

  return (
    <div className={cx('wrapper')}>
      {title && (
        <h2 className={cx('title')}>{title.replace(' on Loklok', '')}</h2>
      )}

      <div className={cx('content')}>
        <Swiper
          className={cx('slides')}
          spaceBetween={10}
          slidesPerView={'auto'}
          speed={500}
          grabCursor={true}
        >
          {data.map((movie) => (
            <SwiperSlide className={cx('slide')} key={movie.id}>
              <MovieItem movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default MovieList
