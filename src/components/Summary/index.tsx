import Card from '@/UI/Card'
import * as S from './styles'

const Summary = () => {
  return (
    <S.WrapperSummary>
      <Card title="Entradas" type="Entrada" value="R$ 17.400,00" />
      <Card title="Saídas" type="Saida" value="R$ 1.259,00" />
      <Card title="Total" type="Total" value="R$ R$ 16.141,00" />
    </S.WrapperSummary>
  )
}

export default Summary
