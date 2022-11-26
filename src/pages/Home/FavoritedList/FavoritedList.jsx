import { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './FavoritedList.module.scss'

import MovieList from '../../../components/MovieList/MovieList'
const cx = classNames.bind(styles)

const FavoritedList = () => {
  const [favorites, setFavorites] = useState(() => {
    const fav = JSON.parse(localStorage.getItem('favorites'))
    return fav || []
  })
  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('title')}>My list</h2>
      {favorites.length > 0 ? (
        <MovieList data={favorites} />
      ) : (
        <p>No movies in your list. Add some!</p>
      )}
    </div>
  )
}

export default FavoritedList
