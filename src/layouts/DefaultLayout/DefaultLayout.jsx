import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

import styles from './DefaultLayout.scss'

const DefaultLayout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default DefaultLayout
