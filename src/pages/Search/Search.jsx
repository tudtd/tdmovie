import styles from './Search.module.scss'
import SearchForm from './SearchForm/SearchForm'
import SearchList from './SearchList/SearchList'
import DefaultLayout from '../../layouts/DefaultLayout/DefaultLayout'

const Search = () => {
  return (
    <DefaultLayout>
      <div className={styles.wrapper}>
        <SearchForm />
        <SearchList />
      </div>
    </DefaultLayout>
  )
}

export default Search
