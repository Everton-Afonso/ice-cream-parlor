import Table from '@/UI/Table'
import Summary from '../Summary'
import * as S from './styles'

const Dashboard = () => {
  return (
    <S.WrapperDashboard>
      <Summary />
      <Table />
    </S.WrapperDashboard>
  )
}

export default Dashboard
