import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Footer } from './components/Footer'
import { Navigation } from './components/Navigation'
import { AppContainer } from './styled/AppContainer'
import { GlobalStyle } from './styled/GlobalStyle'
import { theme } from './styled/theme'
import { Router } from './Router'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <AppContainer className="App">
        <Navigation />
        <Router />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
