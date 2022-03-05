import { createContext, useContext } from 'react'

import { prismicClient } from '../services/prismicClient'

export const PrismicClientContext = createContext({})

export function usePrismicClientContext() {
  return useContext(PrismicClientContext)
}

export function PrismicClientProvider(props) {
  return <PrismicClientContext.Provider {...props} value={prismicClient} />
}
