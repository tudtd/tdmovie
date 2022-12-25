import { useState } from 'react'
import styles from './ReadMore.module.scss'

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
        <span onClick={toggleReadMore} className={styles.showHide}>
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
