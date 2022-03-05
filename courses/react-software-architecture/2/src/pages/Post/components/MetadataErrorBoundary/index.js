import { Component } from 'react'

import { Container } from './styled'

export class MetadataErrorBoundary extends Component {
  constructor(props) {
    super(props)

    this.state = { error: null }
  }

  componentDidCatch(error, errorInfo) {
    console.error('MetadataErrorBoundary >>>>>', { error, errorInfo })
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  render() {
    if (this.state.error) {
      return (
        <Container className="MetadataErrorBoundary">
          something went wrong, reload the page or try again later
        </Container>
      )
    }

    return this.props.children
  }
}
