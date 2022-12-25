import { Link } from 'react-router-dom'

import styles from './MovieSimilar.module.scss'

const MovieSimilar = ({ detail }) => {
  return (
    <div className={styles.wrapper}>
      {typeof detail.likeList !== 'undefined' && (
        <h2 className={styles.title}>More like this</h2>
      )}

      <ul className={styles.list}>
        {typeof detail.likeList !== 'undefined'
          ? detail.likeList.map((movie, i) => (
              <Link key={i} to={`/${movie.category}/${movie.id}`}>
                <li>
                  <img src={movie.coverVerticalUrl} alt={movie.name} />
                  <p>{movie.name}</p>
                </li>
              </Link>
            ))
          : null}
      </ul>
    </div>
  )
}

export default MovieSimilar
