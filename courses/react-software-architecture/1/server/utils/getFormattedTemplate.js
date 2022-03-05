import fs from 'fs'
import path from 'path'

export function getFormattedTemplate({ app, styleTags, preloadedData }) {
  try {
    const templateFile = fs.readFileSync(path.resolve('./build/index.html'), {
      encoding: 'utf8',
    })

    return templateFile
      .replace('<div id="root"></div>', `<div id="root">${app}</div>`)
      .replace('<style id="server-side-sheet"></style>', styleTags)
      .replace(
        '<script id="server-side-data"></script>',
        `<script id="server-side-data">window.preloadedData = ${JSON.stringify(
          preloadedData
        )}</script>`
      )
  } catch (error) {
    console.log('getFormattedTemplate >>>>>', error)

    throw new Error('getFormattedTemplate >>>>>', error)
  }
}
