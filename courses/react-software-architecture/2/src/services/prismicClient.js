import Prismic from '@prismicio/client'

if (
  !process.env.REACT_APP_PRISMIC_API_ENDPOINT ||
  !process.env.REACT_APP_PRISMIC_ACCESS_TOKEN
) {
  console.error('prismicClient >>>>> missing environment variables')

  throw new Error('prismicClient >>>>> missing environment variables')
}

export const prismicClient = Prismic.client(
  process.env.REACT_APP_PRISMIC_API_ENDPOINT,
  {
    accessToken: process.env.REACT_APP_PRISMIC_ACCESS_TOKEN,
  }
)
