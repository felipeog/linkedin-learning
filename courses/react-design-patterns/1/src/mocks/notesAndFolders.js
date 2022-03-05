import { TYPES } from '../consts/types'

export const notesAndFolders = [
  {
    id: 'folder-1',
    type: TYPES.FOLDER,
    title: 'folder 1',
    children: [
      {
        id: 'folder-1-note-1',
        type: TYPES.NOTE,
        title: '[folder 1] note 1',
        content: 'content',
      },
      {
        id: 'folder-1-note-2',
        type: TYPES.NOTE,
        title: '[folder 1] note 2',
        content: 'content',
      },
      {
        id: 'folder-1.2',
        type: TYPES.FOLDER,
        title: 'folder 1.2',
        children: [
          {
            id: 'folder-1.2-note-1',
            type: TYPES.NOTE,
            title: '[folder 1.2] note 1',
            content: 'content',
          },
          {
            id: 'folder-1.2-note-2',
            type: TYPES.NOTE,
            title: '[folder 1.2] note 2',
            content: 'content',
          },
          {
            id: 'folder-1.2-note-3',
            type: TYPES.NOTE,
            title: '[folder 1.2] note 3',
            content: 'content',
          },
        ],
      },
    ],
  },
  {
    id: 'folder-2',
    type: TYPES.FOLDER,
    title: 'folder 2',
    children: [
      {
        id: 'folder-2-note-1',
        type: TYPES.NOTE,
        title: '[folder 2] note 1',
        content: 'content',
      },
      {
        id: 'folder-2-note-2',
        type: TYPES.NOTE,
        title: '[folder 2] note 2',
        content: 'content',
      },
      {
        id: 'folder-2.2',
        type: TYPES.FOLDER,
        title: 'folder 2.2',
        children: [
          {
            id: 'folder-2.2-note-1',
            type: TYPES.NOTE,
            title: '[folder 2.2] note 1',
            content: 'content',
          },
          {
            id: 'folder-2.2-note-2',
            type: TYPES.NOTE,
            title: '[folder 2.2] note 2',
            content: 'content',
          },
          {
            id: 'folder-2.2-note-3',
            type: TYPES.NOTE,
            title: '[folder 2.2] note 3',
            content: 'content',
          },
        ],
      },
    ],
  },
]
