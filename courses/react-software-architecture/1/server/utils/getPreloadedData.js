import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

import { InitialDataContext } from '../../src/contexts/InitialDataContext'
import App from '../../src/App'

export async function getPreloadedData(url) {
  const initialData = {
    _isServerSide: true,
    _requests: [],
    _data: {},
  }

  renderToString(
    <InitialDataContext.Provider value={initialData}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </InitialDataContext.Provider>
  )

  try {
    await Promise.all(initialData._requests)

    return {
      _isServerSide: false,
      _data: initialData._data,
    }
  } catch (error) {
    console.log('getPreloadedData >>>>>', error)

    throw new Error('getPreloadedData >>>>>', error)
  }
}
