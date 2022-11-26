import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import { CgSearch as SearchIcon } from 'react-icons/cg'

import styles from './Header.module.scss'

const cx = classNames.bind(styles)

const Header = () => {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('nav')}>
        <div className={cx('nav__left')}>
          <Link to="/">
            <div className={cx('logo')}>
              TD<span>MOVIE</span>
            </div>
          </Link>
        </div>
        <Link to="/search">
          <div className={cx('nav__right')}>
            <div className={cx('search-btn')}>
              <SearchIcon />
            </div>
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header
