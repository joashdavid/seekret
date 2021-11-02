import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { CreateContact } from '../contact/create'

// import { CreateIndividualContact } from '../contact/create/individual/index'
// import { CreateCompanyContact } from '../contact/create/company'
import { ManageContact } from '../contact/manage'
import { ViewContact } from '../contact/view'
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
      <Route
        exact
        path={`${match.path}/viewContact`}
        component={ViewContact}
      />
    </Switch>
  )
}

export { Routing }
