import classNames from 'classnames/bind'

import styles from './Footer.module.scss'

const cx = classNames.bind(styles)

const Footer = () => {
  return (
    <footer className={cx('wrapper')}>
      <p>Make with ❤️ by TD.</p>
    </footer>
  )
}

export default Footer
