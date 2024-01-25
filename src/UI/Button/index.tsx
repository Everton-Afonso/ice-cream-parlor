import { ButtonHTMLAttributes } from 'react'

import * as S from './styles'

export type ButtonColors = 'blue' | 'green' | 'gray'

type ButtonProps = {
  title: string
  color?: ButtonColors
  as?: React.ElementType
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ title, color = 'blue', ...props }: ButtonProps) => {
  return (
    <S.WrapperButton {...props} $color={color}>
      {title}
    </S.WrapperButton>
  )
}

export default Button
