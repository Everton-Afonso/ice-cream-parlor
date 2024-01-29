import Summary from '../Summary'
import * as S from './styles'
import MobileCardsTable from '@/UI/MobileCardsTable'

const Dashboard = () => {
  return (
    <S.WrapperDashboard>
      <Summary />
      <MobileCardsTable />
    </S.WrapperDashboard>
  )
}

export default Dashboard
