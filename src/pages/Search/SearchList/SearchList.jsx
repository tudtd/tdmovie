import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import styles from './SearchList.module.scss'
import * as movieApi from '../../../services/movieApi'
import MovieList from '../../../components/MovieList/MovieList'

const SearchList = () => {
  const [topSearch, setTopSearch] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [query] = useSearchParams()
  const keyword = query.get('q')

  useEffect(() => {
    const searchMovie = async () => {
      const response = await movieApi.search(keyword)
      response && setSearchResults(response)
    }
    searchMovie()
  }, [keyword])

  useEffect(() => {
    const fetchData = async () => {
      const response = await movieApi.topSearch()
      setTopSearch(response)
    }
    fetchData()
  }, [])

  // console.log('topSearch: ', topSearch)
  // console.log('searchResults: ', searchResults)

  const topSearchList = (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Top Search</h2>
      <MovieList data={topSearch} />
    </div>
  )

  const searchList = (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Results</h2>
      <MovieList data={searchResults} />
    </div>
  )

  return searchResults.length > 0 ? searchList : topSearchList
}

export default SearchList
