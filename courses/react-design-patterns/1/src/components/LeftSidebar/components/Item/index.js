import './index.css'
import { AddFolderButton } from '../AddFolderButton'
import { AddNoteButton } from '../AddNoteButton'
import { EditButton } from '../EditButton'
import { EditModal } from '../EditModal'
import { TYPES } from '../../../../consts/types'
import { useModalContext } from '../../../../contexts/ModalContext'
import { useNotesContext } from '../../../../contexts/NotesContext'

export function Item({ item }) {
  const { selected, setSelected } = useNotesContext()
  const { setModalContent, setIsModalOpen } = useModalContext()

  function openEditModal(event) {
    event.stopPropagation()

    const modalContent = <EditModal item={item} />

    setModalContent(modalContent)
    setIsModalOpen(true)
  }

  if (item.type === TYPES.NOTE) {
    return (
      <li
        className="Item Item--note"
        style={{
          backgroundColor: selected?.id === item.id ? '#eeeef0' : 'transparent',
        }}
        onClick={() => setSelected(item)}
      >
        <div className="Item__container">
          <p>📄 {item.title}</p>

          <div className="Item__actions">
            <EditButton onClick={openEditModal} />
          </div>
        </div>
      </li>
    )
  }

  if (item.type === TYPES.FOLDER) {
    return (
      <>
        <li className="Item Item--folder">
          <div className="Item__container">
            <p>📁 {item.title}</p>

            <div className="Item__actions">
              <AddFolderButton folderId={item.id} />
              <AddNoteButton folderId={item.id} />
              <EditButton onClick={openEditModal} />
            </div>
          </div>

          <ul>
            {item.children.map((child) => (
              <Item key={child.id} item={child} />
            ))}
          </ul>
        </li>
      </>
    )
  }

  return null
}
