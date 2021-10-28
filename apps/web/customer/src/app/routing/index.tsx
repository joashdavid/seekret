import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import CreateAccount from '../create-account/create-account'
import Login from '../login/login'
import Dashboard from '../dashboard/layout'
import Otp from '../otp/otp'
import { CreateOrg } from '../create-org/create-org'
import { GlobalRouterPath } from '../routing/constant/globalRoute'

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={GlobalRouterPath.LOGIN} component={Login}></Route>
        <Route exact path={GlobalRouterPath.CREATE_ACCOUNT} component={CreateAccount}></Route>
        <Route exact path={GlobalRouterPath.OTP} component={Otp}></Route>
        <Route exact path={GlobalRouterPath.CREATE_ORG} component={CreateOrg}></Route>
        <Route exact path={GlobalRouterPath.INVITE} component={CreateOrg}></Route>
        <Route  path={GlobalRouterPath.DASHBOARD} component={Dashboard}></Route>
      </Switch>
    </Router>
  )
}

export { AppRouter }
