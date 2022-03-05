import { useState, useEffect } from 'react'

import './index.css'
import { HorizontalSplit } from '../../layouts/HorizontalSplit'
import { Preview } from './components/Preview'
import { useNotesContext } from '../../contexts/NotesContext'

export function Main() {
  const { selected, isListEmpty, updateItemById } = useNotesContext()

  const [editedContent, setEditedContent] = useState()
  const [isEditing, setIsEditing] = useState()

  function handleContentChange(event) {
    event.preventDefault()

    setEditedContent(event?.target?.value ?? '')
  }

  function updateNoteContent() {
    const updatedItem = {
      ...selected,
      content: editedContent,
    }

    updateItemById(selected?.id, updatedItem)
  }

  function toggleEdit() {
    setIsEditing((prevIsEditing) => !prevIsEditing)
  }

  useEffect(() => {
    setIsEditing(false)
    setEditedContent(selected?.content)

    return () => {
      setIsEditing(false)
    }
  }, [selected])

  if (isListEmpty || !selected?.id) {
    return null
  }

  const isSaveDisabled = selected?.content === editedContent

  return (
    <div className="Main">
      <div className="Main__actions">
        <button onClick={toggleEdit}>{isEditing ? 'cancel' : 'edit'}</button>

        {isEditing && (
          <button onClick={updateNoteContent} disabled={isSaveDisabled}>
            save
          </button>
        )}
      </div>

      <div className="Main__content">
        {isEditing ? (
          <HorizontalSplit>
            <textarea
              className="Main__editor"
              value={editedContent}
              onChange={handleContentChange}
            ></textarea>

            <Preview rawMarkdown={editedContent} />
          </HorizontalSplit>
        ) : (
          <Preview rawMarkdown={selected.content} />
        )}
      </div>
    </div>
  )
}
