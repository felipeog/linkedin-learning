import { useCallback } from 'react'
import { useParams } from 'react-router-dom'

import { PostTitleWithMetadata } from '../../components/PostTitleWithMetadata'
import { usePrismicClientContext } from '../../contexts/PrismicClientContext'
import { useFetch } from '../../hooks/useFetch'
import { Page } from '../../layouts/Page'
import { AdditionalMetadata } from './components/AdditionalMetadata'
import { PostContent } from './components/PostContent'

export default function Post() {
  const { postUid } = useParams()
  const prismicClient = usePrismicClientContext()

  const fetchPost = useCallback(() => {
    return prismicClient.getByUID('post', postUid)
  }, [postUid, prismicClient])

  const { loading, error, data: post } = useFetch(fetchPost)

  function renderPost() {
    if (error) {
      return <h1>error loading post</h1>
    }

    if (loading) {
      return <h1>loading...</h1>
    }

    if (!post?.uid) {
      return <h1>post not found</h1>
    }

    return (
      <>
        <PostTitleWithMetadata post={post} />
        <AdditionalMetadata post={post} />
        <PostContent content={post?.data?.content ?? []} />
      </>
    )
  }

  return <Page className="Post">{renderPost()}</Page>
}
