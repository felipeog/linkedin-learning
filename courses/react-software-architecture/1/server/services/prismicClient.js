import Prismic from '@prismicio/client'

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

if (!process.env.PRISMIC_API_ENDPOINT || !process.env.PRISMIC_ACCESS_TOKEN) {
  console.log('prismicClient >>>>> missing environment variables')

  throw new Error('prismicClient >>>>> missing environment variables')
}

export const prismicClient = Prismic.client(process.env.PRISMIC_API_ENDPOINT, {
  accessToken: process.env.PRISMIC_ACCESS_TOKEN,
})
