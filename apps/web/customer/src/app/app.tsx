import { Button } from 'antd'
import styles from './app.module.less'

const App = () => {
  return (
    <div className={styles.app}>
      <header className="flex">
        <h1>Welcome to web-customer!</h1>
      </header>
      <main>
        <Button type="primary">Click</Button>
      </main>
    </div>
  )
}

export { App }
