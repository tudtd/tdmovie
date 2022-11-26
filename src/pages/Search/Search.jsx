import classNames from 'classnames/bind'

import styles from './Search.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import SearchForm from './SearchForm/SearchForm'
import SearchList from './SearchList/SearchList'

const cx = classNames.bind(styles)

const Search = () => {
  return (
    <>
      <Header />
      <div className={cx('wrapper')}>
        <SearchForm />
        <SearchList />
      </div>
      <Footer />
    </>
  )
}

export default Search
