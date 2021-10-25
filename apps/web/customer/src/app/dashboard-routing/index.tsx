import { Route, Switch, useRouteMatch } from 'react-router-dom'
// import React, { lazy } from 'react'

import CreateOrgDashboard from '../create-org-dashboard'
import { CreateContact } from '../create-contact'

const DashboardRouter = () => {
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
    </Switch>
  )
}

export { DashboardRouter }
