import * as S from './styles'

export type ButtonColors = 'blue' | 'green' | 'gray'

type ButtonProps = {
  title: string
  color?: ButtonColors
}

const Button = ({ title, color = 'blue' }: ButtonProps) => {
  return <S.WrapperButton $color={color}>{title}</S.WrapperButton>
}

export default Button
