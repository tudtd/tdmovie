import { useState } from 'react'
import classNames from 'classnames/bind'

import styles from './ReadMore.module.scss'
import './ReadMore.module.scss'

const cx = classNames.bind(styles)

const ReadMore = ({ children, length = 300 }) => {
  const text = children
  const [isReadMore, setIsReadMore] = useState(true)
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore)
  }

  let readMore
  if (text.length > length) {
    readMore = (
      <p>
        {isReadMore ? text.slice(0, length) : text}
        <span onClick={toggleReadMore} className={cx('show-hide')}>
          {isReadMore ? 'More...' : 'Less'}
        </span>
      </p>
    )
  } else {
    readMore = text
  }

  return <div className="wrapper">{readMore}</div>
}

export default ReadMore
