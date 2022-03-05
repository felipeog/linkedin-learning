import { useState } from 'react'

import './index.css'
import { useModalContext } from '../../../../contexts/ModalContext'
import { useNotesContext } from '../../../../contexts/NotesContext'

export function EditModal({ item }) {
  const { updateItemById, removeItemById } = useNotesContext()
  const { closeModal } = useModalContext()

  const [title, setTitle] = useState(item.title)

  function handleTitleSubmit(event) {
    event.preventDefault()

    updateItemById(item.id, {
      ...item,
      title,
    })
    closeModal()
  }

  function handleTitleChange(event) {
    setTitle(event?.target?.value)
  }

  function deleteItem() {
    removeItemById(item.id)
    closeModal()
  }

  const isSaveDisabled = !title?.length || title === item?.title
  const itemType = item?.type ?? ''

  return (
    <form className="EditModal" onSubmit={handleTitleSubmit}>
      <fieldset>
        <legend>{itemType} edit</legend>

        <label htmlFor="title">title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={handleTitleChange}
        />

        <div className="EditModal__actions">
          <button type="submit" disabled={isSaveDisabled}>
            save
          </button>

          <button type="button" onClick={deleteItem}>
            delete
          </button>
        </div>
      </fieldset>
    </form>
  )
}
