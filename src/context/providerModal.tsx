import React, { ReactNode, createContext, useContext, useState } from 'react'

interface ModalContextProps {
  isNewtransactionModalOpen: boolean
  toggleNewtransactionModalOpen: () => void
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined)

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isNewtransactionModalOpen, setIsNewtransactionModalOpen] =
    useState<boolean>(false)

  const toggleNewtransactionModalOpen = () => {
    setIsNewtransactionModalOpen((prev) => !prev)
  }

  const contextValue: ModalContextProps = {
    isNewtransactionModalOpen,
    toggleNewtransactionModalOpen
  }

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  )
}

const useModal = (): ModalContextProps => {
  const context = useContext(ModalContext)

  if (!context) {
    throw new Error('useModal must be used inside a ModalProvider')
  }

  return context
}

export { ModalProvider, useModal }
