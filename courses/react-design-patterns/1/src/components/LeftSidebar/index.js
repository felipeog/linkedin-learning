import './index.css'
import { AddFolderButton } from './components/AddFolderButton'
import { AddNoteButton } from './components/AddNoteButton'
import { Item } from './components/Item'
import { RegularList } from '../../layouts/RegularList'
import { useNotesContext } from '../../contexts/NotesContext'

export function LeftSidebar() {
  const { list } = useNotesContext()

  return (
    <div className="LeftSidebar">
      <div className="LeftSidebar__actions">
        <AddFolderButton />
        <AddNoteButton />
      </div>

      <RegularList
        items={list}
        resourceName="item"
        itemComponent={Item}
        listWrapper="ul"
      />
    </div>
  )
}
