import * as ReactDOM from 'react-dom'
import { store } from './app/store'

import { App } from './app/app'
import { StrictMode } from 'react'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  document.getElementById('root')
)
