import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

import { InitialDataContext } from '../../src/contexts/InitialDataContext'
import App from '../../src/App'

export function getStyleTags(url, preloadedData) {
  const sheet = new ServerStyleSheet()

  renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <InitialDataContext.Provider value={preloadedData}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </InitialDataContext.Provider>
    </StyleSheetManager>
  )

  return sheet.getStyleTags()
}
