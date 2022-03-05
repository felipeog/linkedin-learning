import React from 'react'

import { BASE_URL } from '../../consts/baseUrl'
import { useDataSsr } from '../../hooks/useDataSsr'
import { Page } from '../../layouts/Page'
import { PostsList } from './components/PostsList'

export function Home() {
  const posts = useDataSsr('posts', () => {
    return fetch(`${BASE_URL}/api/posts`)
      .then((response) => response.json())
      .catch((error) => console.error('Home >>>>>', error))
  })

  return (
    <Page as="main" className="Home">
      <PostsList posts={posts} />
    </Page>
  )
}
