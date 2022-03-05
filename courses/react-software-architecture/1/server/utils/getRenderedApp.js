import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

import { InitialDataContext } from '../../src/contexts/InitialDataContext'
import App from '../../src/App'
import { getFormattedTemplate } from './getFormattedTemplate'
import { getPreloadedData } from './getPreloadedData'
import { getStyleTags } from './getStyleTags'

export async function getRenderedApp(url) {
  try {
    const preloadedData = await getPreloadedData(url)
    const styleTags = getStyleTags(url, preloadedData)
    const app = renderToString(
      <InitialDataContext.Provider value={preloadedData}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </InitialDataContext.Provider>
    )

    return getFormattedTemplate({
      app,
      styleTags,
      preloadedData,
    })
  } catch (error) {
    console.log('getRenderedApp >>>>>', error)

    throw new Error('getRenderedApp >>>>>', error)
  }
}
