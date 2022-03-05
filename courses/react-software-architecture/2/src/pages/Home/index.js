import Prismic from '@prismicio/client'
import { useCallback } from 'react'

import { usePrismicClientContext } from '../../contexts/PrismicClientContext'
import { useFetch } from '../../hooks/useFetch'
import { Page } from '../../layouts/Page'
import { PostsList } from './components/PostsList'

export default function Home() {
  const prismicClient = usePrismicClientContext()

  const fetchPosts = useCallback(() => {
    return prismicClient.query(Prismic.Predicates.at('document.type', 'post'), {
      orderings: '[document.first_publication_date desc]',
    })
  }, [prismicClient])

  const { loading, error, data } = useFetch(fetchPosts)

  function renderHome() {
    if (error) {
      return <h1>error loading posts</h1>
    }

    if (loading) {
      return <h1>loading...</h1>
    }

    return <PostsList posts={data?.results ?? []} />
  }

  return (
    <Page as="main" className="Home">
      {renderHome()}
    </Page>
  )
}
