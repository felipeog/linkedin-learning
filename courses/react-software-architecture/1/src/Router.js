import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { About } from './pages/About'
import { Home } from './pages/Home'
import { Post } from './pages/Post'

export function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/post/:postUid" component={Post} />
    </Switch>
  )
}
