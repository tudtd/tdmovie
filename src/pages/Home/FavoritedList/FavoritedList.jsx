import { useState } from 'react'
import styles from './FavoritedList.module.scss'

import MovieList from '../../../components/MovieList/MovieList'

const FavoritedList = () => {
  const [favorites] = useState(() => {
    const fav = JSON.parse(localStorage.getItem('favorites'))
    return fav || []
  })
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>My list</h2>
      {favorites.length > 0 ? (
        <MovieList data={favorites} />
      ) : (
        <p>No movies in your list. Add some!</p>
      )}
    </div>
  )
}

export default FavoritedList
