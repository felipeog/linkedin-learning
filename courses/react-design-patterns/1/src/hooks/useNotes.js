import { useEffect, useState, useCallback } from 'react'
import dayjs from 'dayjs'

import { NOTES_LOCAL_STORAGE_ID } from '../consts/notesLocalStorageId'
import { TYPES } from '../consts/types'

function getCurrentTimestamp() {
  return dayjs().format('YYYY/MM/DD HH:mm:ss')
}

export function useNotes() {
  const listFromLocalStorage = JSON.parse(
    localStorage.getItem(NOTES_LOCAL_STORAGE_ID) ?? '[]'
  )

  const [list, setList] = useState(listFromLocalStorage)
  const [selected, setSelected] = useState(null)

  const findItemById = useCallback((itemId, initialList = null) => {
    const currentList =
      initialList ?? JSON.parse(localStorage.getItem(NOTES_LOCAL_STORAGE_ID))

    return currentList.reduce((acc, item) => {
      if (acc) {
        return acc
      }

      if (item.id === itemId) {
        return item
      }

      if (item?.children) {
        return findItemById(itemId, item.children)
      }

      return null
    }, null)
  }, [])

  function addNote(folderId) {
    const currentList = [...list]
    const defaultNote = {
      id: `note-${Math.random()}`,
      type: TYPES.NOTE,
      title: `note ${getCurrentTimestamp()}`,
      content: 'edit this note',
    }

    if (!folderId) {
      currentList.unshift(defaultNote)

      return setList(currentList)
    }

    const folder = findItemById(folderId, currentList)

    folder.children.unshift(defaultNote)

    setList(currentList)
  }

  function addFolder(folderId) {
    const currentList = [...list]
    const defaultFolder = {
      id: `folder-${Math.random()}`,
      type: TYPES.FOLDER,
      title: `folder ${getCurrentTimestamp()}`,
      children: [],
    }

    if (!folderId) {
      currentList.unshift(defaultFolder)

      return setList(currentList)
    }

    const folder = findItemById(folderId, currentList)

    folder.children.unshift(defaultFolder)

    setList(currentList)
  }

  function findItemParentById(itemId, initialList = null) {
    const currentList =
      initialList ?? JSON.parse(localStorage.getItem(NOTES_LOCAL_STORAGE_ID))

    if (!Array.isArray(currentList)) {
      return null
    }

    const hasWantedChild = currentList.some((item) => item.id === itemId)

    if (hasWantedChild) {
      return initialList
    }

    return currentList.reduce((acc, item) => {
      if (acc) {
        return acc
      }

      if (item?.children) {
        return findItemParentById(itemId, item.children)
      }

      return null
    }, null)
  }

  function removeItemById(itemId) {
    const currentList = [...list]
    const parent = findItemParentById(itemId, currentList)
    const itemIndex = parent.findIndex((item) => item.id === itemId)

    parent.splice(itemIndex, 1)

    setList(currentList)
  }

  function updateItemById(itemId, updatedItem) {
    const currentList = [...list]
    const parent = findItemParentById(itemId, currentList)
    const itemIndex = parent.findIndex((item) => item.id === itemId)

    parent.splice(itemIndex, 1, updatedItem)

    setList(currentList)
  }

  useEffect(() => {
    localStorage.setItem(NOTES_LOCAL_STORAGE_ID, JSON.stringify(list))

    const updatedSelected = findItemById(selected?.id)

    setSelected(updatedSelected)
  }, [findItemById, list, selected?.id])

  return {
    addFolder,
    addNote,
    isListEmpty: !list?.length,
    list,
    removeItemById,
    selected,
    setSelected,
    updateItemById,
  }
}
