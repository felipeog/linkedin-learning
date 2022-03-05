import { ThemeProvider } from 'styled-components'

import { Footer } from './components/Footer'
import { Navigation } from './components/Navigation'
import { PrismicClientProvider } from './contexts/PrismicClientContext'
import { AppContainer } from './styled/AppContainer'
import { GlobalStyle } from './styled/GlobalStyle'
import { theme } from './styled/theme'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <AppContainer className="App">
        <PrismicClientProvider>
          <Navigation />
          <Router />
          <Footer />
        </PrismicClientProvider>
      </AppContainer>
    </ThemeProvider>
  )
}
