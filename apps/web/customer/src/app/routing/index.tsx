import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import CreateAccount from '../create-account/create-account'
import Login from '../login/login'
import Dashboard from '../dashboard/layout'
import Otp from '../otp/otp'
import { CreateOrg } from '../create-org/create-org'
import { GlobalRouterPath } from '../routing/constant/globalRoute'
import AccountVerify from '../account-verify/index'



import {Invite} from '../invite/invite'

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={GlobalRouterPath.LOGIN} component={Login}></Route>
        <Route exact path={GlobalRouterPath.CREATE_ACCOUNT} component={CreateAccount}></Route>
        <Route exact path={GlobalRouterPath.OTP} component={Otp}></Route>
        <Route exact path={GlobalRouterPath.CREATE_ORG} component={CreateOrg}></Route>
        <Route exact path={GlobalRouterPath.INVITE} component={Invite}></Route>
        <Route  path={GlobalRouterPath.DASHBOARD} component={Dashboard}></Route>
        <Route exact path={GlobalRouterPath.VERIFY} component={AccountVerify}></Route>
      </Switch>
    </Router>
  )
}

export { AppRouter }
