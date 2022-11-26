import classNames from 'classnames/bind'
import styles from './Home.module.scss'

import Header from '../../components/Header/Header'
import HomeMovieList from './HomeMovieList/HomeMovieList'
import FavoritedList from './FavoritedList/FavoritedList'
import Footer from '../../components/Footer/Footer'

const cx = classNames.bind(styles)

const Home = () => {
  return (
    <>
      <Header />
      <div className={cx('wrapper')}>
        <FavoritedList />
        <HomeMovieList />
      </div>
      <Footer />
    </>
  )
}

export default Home
