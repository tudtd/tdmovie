import styles from './Home.module.scss'

import HomeMovieList from './HomeMovieList/HomeMovieList'
import FavoritedList from './FavoritedList/FavoritedList'
import DefaultLayout from '../../layouts/DefaultLayout/DefaultLayout'

const Home = () => {
  return (
    <DefaultLayout>
      <div className={styles.wrapper}>
        <FavoritedList />
        <HomeMovieList />
      </div>
    </DefaultLayout>
  )
}

export default Home
