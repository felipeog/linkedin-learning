import { createContext, useContext } from 'react'

import { useModal } from '../hooks/useModal'

export const ModalContext = createContext(undefined)

export function useModalContext() {
  const context = useContext(ModalContext)

  if (context === undefined) {
    throw new Error(
      'useModalContext must be used within a ModalContext provider'
    )
  }

  return context
}

export function ModalContextProvider(props) {
  const value = useModal()

  return <ModalContext.Provider {...props} value={value} />
}
