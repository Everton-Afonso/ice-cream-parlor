'use client'

import { FormEvent, useState } from 'react'
import Image from 'next/image'
import Modal from 'react-modal'

import { useModal } from '../../providers/providerModal'
import Button from '@/UI/Button'

import * as S from './styles'

enum TransactionType {
  Deposit = 'deposit',
  Withdraw = 'withdraw'
}

const NewtransactionModal = () => {
  const { isNewtransactionModalOpen, toggleNewtransactionModalOpen } =
    useModal()
  const [title, setTitle] = useState<string>('')
  const [amount, setAmount] = useState<number>(0)
  const [type, setType] = useState<string>('deposit')

  const resetForm = () => {
    setTitle('')
    setAmount(0)
    setType(TransactionType.Deposit)
    toggleNewtransactionModalOpen()
  }

  const handleCreateNewTransaction = (e: FormEvent) => {
    e.preventDefault()

    const data = {
      title,
      type,
      amount
    }

    console.log(data)

    resetForm()
  }

  return (
    <Modal
      isOpen={isNewtransactionModalOpen}
      onRequestClose={resetForm}
      ariaHideApp={false}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={resetForm} className="react-modal-close">
        <Image
          alt="Fechar modal"
          src="/assets/fechar.svg"
          width={40}
          height={40}
        />
      </button>

      <S.Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount === 0 ? '' : amount}
          onChange={(e) => setAmount(Number(e.target.value.replace(/^0+/, '')))}
        />

        <S.TransactinTypeContainer>
          <Button
            type="button"
            title="Entrada"
            color="gray"
            typeImg="Entrada"
            className={`${type === TransactionType.Deposit && 'deposit'}`}
            onClick={() => setType(TransactionType.Deposit)}
          />

          <Button
            type="button"
            title="Saída"
            color="gray"
            typeImg="Saida"
            className={`${type === TransactionType.Withdraw && 'withdraw'}`}
            onClick={() => setType(TransactionType.Withdraw)}
          />
        </S.TransactinTypeContainer>

        <Button
          title="Cadastrar"
          color="green"
          type="submit"
          typeImg="Undefined"
        />
      </S.Container>
    </Modal>
  )
}

export default NewtransactionModal
