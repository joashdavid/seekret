import { Route, Switch, useRouteMatch } from 'react-router-dom'
// import React, { lazy } from 'react'

import CreateOrgDashboard from '../organization/create'
import { CreateContact } from '../contact/create'
import { ManageOrg } from '../organization/manage'
import { ManageContact } from '../contact/manage'

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
      />s
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
