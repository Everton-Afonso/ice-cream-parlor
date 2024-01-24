import Image from 'next/image'
import * as S from './styles'
import Button from '@/UI/Button'

const Header = () => {
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

        <Button title="Nova transação" />
      </section>
    </S.WrapperHeader>
  )
}

export default Header
