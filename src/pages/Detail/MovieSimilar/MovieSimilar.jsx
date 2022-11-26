import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import styles from './MovieSimilar.module.scss'

const cx = classNames.bind(styles)

const MovieSimilar = ({ detail }) => {
  return (
    <div className={cx('wrapper')}>
      {typeof detail.likeList !== 'undefined' && (
        <h2 className={cx('title')}>More like this</h2>
      )}

      <ul className={cx('list')}>
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
