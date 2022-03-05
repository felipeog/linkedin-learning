import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { InitialDataContext } from './contexts/InitialDataContext'
import App from './App'

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

ReactDOM.hydrate(
  <React.StrictMode>
    <InitialDataContext.Provider value={window?.preloadedData ?? { _data: {} }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </InitialDataContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
