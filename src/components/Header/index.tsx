import Image from 'next/image'
import * as S from './styles'

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

          <span>vila boca gelada</span>
        </div>
      </section>
    </S.WrapperHeader>
  )
}

export default Header
