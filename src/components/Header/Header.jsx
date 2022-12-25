import { Link } from 'react-router-dom'
import { CgSearch as SearchIcon } from 'react-icons/cg'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.nav}>
        <div className={styles.nav__left}>
          <Link to="/">
            <div className={styles.logo}>
              TD<span>MOVIE</span>
            </div>
          </Link>
        </div>
        <Link to="/search">
          <div className={styles.nav__right}>
            <div className={styles.searchBtn}>
              <SearchIcon />
            </div>
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header
