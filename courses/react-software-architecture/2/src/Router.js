import { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import { lazyImportWithDelay } from './utils/lazyImportWithDelay'
import { RouteLoading } from './pages/RouteLoading'
import { RouteErrorBoundary } from './RouteErrorBoundary'

const About = lazyImportWithDelay(() => import('./pages/About'))
const Home = lazyImportWithDelay(() => import('./pages/Home'))
const Post = lazyImportWithDelay(() => import('./pages/Post'))

export function Router() {
  const routes = [
    {
      isExact: true,
      path: '/',
      page: <Home />,
    },
    {
      isExact: false,
      path: '/about',
      page: <About />,
    },
    {
      isExact: true,
      path: '/post/:postUid',
      page: <Post />,
    },
  ]

  return (
    <Switch>
      {routes.map(({ isExact, path, page }) => (
        <Route key={path} exact={isExact} path={path}>
          <RouteErrorBoundary key={path}>
            <Suspense fallback={<RouteLoading />}>{page}</Suspense>
          </RouteErrorBoundary>
        </Route>
      ))}
    </Switch>
  )
}
