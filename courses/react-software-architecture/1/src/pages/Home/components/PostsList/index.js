import React from 'react'

import { PostDetails } from '../../../../components/PostDetails'
import { Container, Anchor } from './styled'

export function PostsList({ posts }) {
  if (!posts?.length) {
    return <h1>no posts found</h1>
  }

  return (
    <Container className="PostsList">
      {posts.map((post) => (
        <Anchor key={post} href={`/post/${post?.uid}`}>
          <PostDetails post={post} />
        </Anchor>
      ))}
    </Container>
  )
}
