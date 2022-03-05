import React from 'react'

import { NavigationLink } from './components/NavigationLink'
import { Container } from './styled'

export function Navigation() {
  return (
    <nav className="Navigation">
      <Container>
        <li>
          <NavigationLink to="/" activeOnlyWhenExact>
            home
          </NavigationLink>
        </li>

        <li>
          <NavigationLink to="/about">about</NavigationLink>
        </li>
      </Container>
    </nav>
  )
}
