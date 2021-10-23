import { Route, Switch } from 'react-router-dom'
// import React, { lazy } from 'react'

import CreateOrgDashboard  from '../create-org-dashboard'

const DashboardRouter = () => {
  return (
    <Switch>
      <Route
        path={`dashboard/createOrg`}
        component={CreateOrgDashboard}
      />
    </Switch>
  )
}

export { DashboardRouter }
