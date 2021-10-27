import { Route, Switch, useRouteMatch } from 'react-router-dom'

import { CreateContact } from '../contact/create/individual'
import { ManageContact } from '../contact/manage'
import CreateOrgDashboard from '../organization/create'
import { ManageOrg } from '../organization/manage'


const Routing = () => {
  const match = useRouteMatch()

  return (
    <Switch>
        <Route
        exact
        path={`${match.path}`}
        component={CreateContact}
      />
      <Route
        exact
        path={`${match.path}/createOrg`}
        component={CreateOrgDashboard}
      />
       <Route
        exact
        path={`${match.path}/manageOrg`}
        component={ManageOrg}
      />
      <Route
        exact
        path={`${match.path}/manageContact`}
        component={ManageContact}
      />
    </Switch>
  )
}

export { Routing }
