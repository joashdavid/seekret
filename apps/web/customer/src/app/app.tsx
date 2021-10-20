// import { Button } from 'antd'
import styles from './app.module.less'
import CreateAccount from './createAccount/createAccount'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Login from './Login/login'
const App = () => {
  return (
    <div className={styles.app}>
      <Router>
      <Switch> 
        <Route exact path='/' component={Login}></Route> 
        <Route exact path='/createaccount' component={CreateAccount}></Route> 
      </Switch> 
      </Router>
    
    </div>
  )
}

export { App }
