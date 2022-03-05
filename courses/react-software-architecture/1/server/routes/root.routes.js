import 'isomorphic-fetch'
import { Router } from 'express'

import { getRenderedApp } from '../utils/getRenderedApp'

const rootRoutes = Router()

rootRoutes.get('/*', async (request, response) => {
  try {
    const renderedApp = await getRenderedApp(request.url)

    return response.send(renderedApp)
  } catch (error) {
    console.log('rootRoutes >>>>>', error)

    return response.status(500).send(error)
  }
})

export { rootRoutes }
