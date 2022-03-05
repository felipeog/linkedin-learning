import React from 'react'

import { useModalContext } from '../../contexts/ModalContext'

import './index.css'

export function Modal() {
  const { isModalOpen, modalContent, closeModal } = useModalContext()

  return (
    isModalOpen && (
      <div className="Modal" onClick={closeModal}>
        <div
          className="Modal__content"
          onClick={(event) => event.stopPropagation()}
        >
          {modalContent}
        </div>
      </div>
    )
  )
}
