import Image from 'next/image'
import * as S from './styles'

type CardProps = {
  title: string
  type: 'Entrada' | 'Saida' | 'Total'
  value: string
}

const typeToImageMap: Record<CardProps['type'], string> = {
  Entrada: '/assets/entradas.svg',
  Saida: '/assets/saidas.svg',
  Total: '/assets/total.svg'
}

const Card = ({ title, type, value }: CardProps) => {
  const imagePath = typeToImageMap[type]

  return (
    <S.WrapperCard $type={type}>
      <header>
        <p>{title}</p>

        <Image
          alt="Simbolo que representa o tipo de transação"
          src={imagePath}
          width={32}
          height={32}
        />
      </header>

      <strong>{value}</strong>
    </S.WrapperCard>
  )
}

export default Card
