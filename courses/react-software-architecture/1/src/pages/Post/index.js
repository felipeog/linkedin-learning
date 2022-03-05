import React from 'react'
import { useParams } from 'react-router-dom'

import { PostDetails } from '../../components/PostDetails'
import { BASE_URL } from '../../consts/baseUrl'
import { useDataSsr } from '../../hooks/useDataSsr'
import { Page } from '../../layouts/Page'
import { PostSection } from './components/PostSection'
import { Content } from './styled'

export function Post() {
  const { postUid } = useParams()
  const post = useDataSsr('post', () => {
    return fetch(`${BASE_URL}/api/post/${postUid}`)
      .then((response) => response.json())
      .catch((error) => console.error('Post >>>>>', error))
  })

  if (!post?.uid) {
    return (
      <Page className="Post">
        <h1>post not found</h1>
      </Page>
    )
  }

  return (
    <Page className="Post">
      <PostDetails post={post} />

      <Content>
        {post?.data?.content?.map((section) => (
          <PostSection key={section} section={section} />
        ))}
      </Content>
    </Page>
  )
}
