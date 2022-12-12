import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface ModalProps {
  children: ReactNode
}

const Modal = ({ children }: ModalProps) => {
  const modalContainer = document.getElementById('modal-root')!

  return createPortal(children, modalContainer)
}

export default Modal
