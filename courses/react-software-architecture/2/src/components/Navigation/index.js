import { Container, NavigationLink } from './styled'

export function Navigation() {
  return (
    <nav className="Navigation">
      <Container>
        <li>
          <NavigationLink to="/" exact>
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
