import { useNotesContext } from '../../../../contexts/NotesContext'

export function AddFolderButton({ folderId }) {
  const { addFolder } = useNotesContext()

  function add() {
    addFolder(folderId)
  }

  return (
    <button className="AddFolderButton" onClick={add}>
      +📁
    </button>
  )
}
