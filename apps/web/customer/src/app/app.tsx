// import { Button } from 'antd'
import styles from './app.module.less'
import CreateAccount from './create-account/create-account'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Login from './login/login'
import Dashboard from './dashboard/dashboard'
import Otp from './otp/otp'
import { CreateOrg } from './create-org/create-org'
const App = () => {
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/createAccount" component={CreateAccount}></Route>
          <Route exact path="/dashboard" component={Dashboard}></Route>
          <Route exact path="/otp" component={Otp}></Route>
          <Route exact path="/createOrganization" component={CreateOrg}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export { App }
