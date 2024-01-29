'use client'

import { useState, useEffect } from 'react'

import * as S from './styles'

const MobileCardsTable = () => {
  const [isMobile, setIsMobile] = useState({
    with: undefined as number | undefined
  })

  useEffect(() => {
    const handleResize = () => {
      setIsMobile({
        with: window.innerWidth
      })
    }

    if (typeof window !== 'undefined') {
      handleResize()

      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return (
    <S.WrapperMobileCardsTable>
      <div>
        {isMobile.with !== undefined && isMobile.with <= 768 ? (
          <>
            <h2>Listagem</h2>
            <p>4 itens</p>
          </>
        ) : (
          <>
            <p>Título</p>
            <p>Valor</p>
            <p>Categoria</p>
            <p>Data</p>
          </>
        )}
      </div>

      <section>
        <p>Desenvolvimento de site</p>
        <h3 className="deposit">R$ 12.000,00</h3>

        <span>Vendas</span>
        <span>13/04/2021</span>
      </section>
      <section>
        <p>Hamburguer</p>
        <h3 className="withdraw">- R$ 59,00</h3>

        <span>Alimentação</span>
        <span>10/04/2021</span>
      </section>
    </S.WrapperMobileCardsTable>
  )
}

export default MobileCardsTable
