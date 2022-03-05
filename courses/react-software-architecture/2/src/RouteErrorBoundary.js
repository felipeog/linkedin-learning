import { Component } from 'react'
import styled from 'styled-components'

import { Page } from './layouts/Page'

const Title = styled.h1`
  margin-bottom: 1rem;
`

export class RouteErrorBoundary extends Component {
  constructor(props) {
    super(props)

    this.state = { error: null }
  }

  componentDidCatch(error, errorInfo) {
    console.error('RouteErrorBoundary >>>>>', { error, errorInfo })
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  render() {
    if (this.state.error) {
      return (
        <Page className="RouteErrorBoundary">
          <Title>something went wrong</Title>

          <p>reload the page or try again later</p>
        </Page>
      )
    }

    return this.props.children
  }
}
