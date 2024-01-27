'use client'

import Image from 'next/image'

import Button from '@/UI/Button'
import { useModal } from '../../providers/providerModal'

import * as S from './styles'

const Header = () => {
  const { toggleNewtransactionModalOpen } = useModal()

  return (
    <S.WrapperHeader>
      <section>
        <div>
          <Image
            alt="Logo ice cream parlor"
            src="/img/logo-ice-cream-parlor.svg"
            width={100}
            height={100}
          />

          <span>Vila boca gelada</span>
        </div>

        <Button
          typeImg="Undefined"
          title="Nova transação"
          onClick={toggleNewtransactionModalOpen}
        />
      </section>
    </S.WrapperHeader>
  )
}

export default Header
