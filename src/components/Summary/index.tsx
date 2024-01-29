import Card from '@/UI/Card'
import * as S from './styles'
import Slider, { SliderSettings } from '@/UI/Slider'

const Summary = () => {
  const settings: SliderSettings = {
    dots: false,
    arrows: false,
    slidesToShow: 3,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 2.2
        }
      },
      {
        breakpoint: 570,
        settings: {
          arrows: false,
          slidesToShow: 1.2
        }
      },
      {
        breakpoint: 375,
        settings: {
          arrows: false,
          slidesToShow: 1.1
        }
      }
    ]
  }

  return (
    <S.WrapperSummary>
      <Slider settings={settings}>
        <Card title="Entradas" type="Entrada" value="R$ 17.400,00" />
        <Card title="Saídas" type="Saida" value="R$ 1.259,00" />
        <Card title="Total" type="Total" value="R$ 16.141,00" />
      </Slider>
    </S.WrapperSummary>
  )
}

export default Summary
