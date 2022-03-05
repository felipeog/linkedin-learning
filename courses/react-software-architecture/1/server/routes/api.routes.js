import { Router } from 'express'
import Prismic from '@prismicio/client'

import { prismicClient } from '../services/prismicClient'

const apiRoutes = Router()

apiRoutes.get('/posts', async (_, response) => {
  try {
    const postsResponse = await prismicClient.query(
      Prismic.Predicates.at('document.type', 'post'),
      {
        orderings: '[document.first_publication_date desc]',
      }
    )

    return response.json(postsResponse.results)
  } catch (error) {
    console.log('apiRoutes >>>>>', error)

    return response.status(500).send(error)
  }
})

apiRoutes.get('/post/:postUid', async (request, response) => {
  if (!request.params.postUid) {
    return response.status(400).send()
  }

  try {
    const postResponse = await prismicClient.getByUID(
      'post',
      request.params.postUid
    )

    return response.json(postResponse)
  } catch (error) {
    console.log('apiRoutes >>>>>', error)

    return response.json({})
  }
})

export { apiRoutes }
