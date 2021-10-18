import * as ReactDOM from 'react-dom'

import { App } from './app/app'
import { StrictMode } from 'react'

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
