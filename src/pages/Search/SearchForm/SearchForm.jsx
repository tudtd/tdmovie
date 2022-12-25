import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

import styles from './SearchForm.module.scss'
import * as movieApi from '../../../services/movieApi'

const SearchForm = () => {
  const [searchInput, setSearchInput] = useState('')
  const [searchSuggestion, setSearchSuggestion] = useState([])
  const location = useLocation()

  const timeoutRef = useRef(null)
  // const inputRef = useRef(null)

  useEffect(() => {
    clearSearchSuggestion()
  }, [location])

  useEffect(() => {
    const getSearchSuggestion = async () => {
      const response = await movieApi.searchSuggestion(searchInput)
      setSearchSuggestion(response.searchResults)
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      getSearchSuggestion()
    }, 500)
  }, [searchInput])

  // window.addEventListener('click', (e) => {
  //   if (inputRef.current !== e.target) {
  //     clearSearchSuggestion()
  //   }
  // })

  const clearSearchSuggestion = () => {
    setSearchInput('')
    setSearchSuggestion([])
  }

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search?q=${encodeURIComponent(searchInput)}`)
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Tìm kiếm phim..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          autoFocus={true}
          // ref={inputRef}
        ></input>
      </form>

      {searchSuggestion.length > 0 ? (
        <ul className={styles.searchSuggestion}>
          {searchSuggestion.map((item, index) => {
            const itemReplaced = item.replace(/<em>|<\/em>/g, '')
            return (
              <Link
                key={index}
                to={`/search?q=${encodeURIComponent(itemReplaced)}`}
              >
                <li>{itemReplaced}</li>
              </Link>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}

export default SearchForm
