import styles from './app.module.less'
import { AppRouter } from './routing'

const App = () => {
  return (
    <div className={styles.app}>
      <AppRouter/>
    </div>
  )
}

export { App }
