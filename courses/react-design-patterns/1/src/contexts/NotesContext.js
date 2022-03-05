import { createContext, useContext } from 'react'

import { useNotes } from '../hooks/useNotes'

export const NotesContext = createContext(undefined)

export function useNotesContext() {
  const context = useContext(NotesContext)

  if (context === undefined) {
    throw new Error(
      'useNotesContext must be used within a NotesContext provider'
    )
  }

  return context
}

export function NotesContextProvider(props) {
  const value = useNotes()

  return <NotesContext.Provider {...props} value={value} />
}
