import { Route, Switch, useRouteMatch } from 'react-router-dom'

import { CreateIndividualContact } from '../create/individual'
import { CreateCompanyContact } from '../create/company'

const Routing = () => {
  const match = useRouteMatch()
    // console.log(match.path)
  return (
    <Switch>
      <Route exact path={`${match.path}/individual`} component={CreateIndividualContact} />
      <Route exact path={`${match.path}/company`} component={CreateCompanyContact} />
    </Switch>
  )
}

export { Routing }
