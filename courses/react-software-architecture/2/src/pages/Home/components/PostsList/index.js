import { PostsListItem } from '../PostsListItem'
import { Container } from './styled'

export function PostsList({ posts }) {
  if (!posts?.length) {
    return <h1>no posts found</h1>
  }

  return (
    <Container className="PostsList">
      {posts.map((post) => (
        <PostsListItem key={post?.uid} post={post} />
      ))}
    </Container>
  )
}
