import { useNotesContext } from '../../../../contexts/NotesContext'

export function AddNoteButton({ folderId }) {
  const { addNote } = useNotesContext()

  function add() {
    addNote(folderId)
  }

  return (
    <button className="AddNoteButton" onClick={add}>
      +📄
    </button>
  )
}
