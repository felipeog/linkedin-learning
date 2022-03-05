import { useEffect, useState } from 'react'

export function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState(null)

  function openModal() {
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  useEffect(() => {
    if (!isModalOpen) {
      setModalContent(null)
    }
  }, [isModalOpen])

  return {
    closeModal,
    isModalOpen,
    modalContent,
    openModal,
    setIsModalOpen,
    setModalContent,
  }
}
