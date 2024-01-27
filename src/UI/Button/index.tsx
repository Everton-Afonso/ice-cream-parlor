'use client'

import Image from 'next/image'

import { ButtonHTMLAttributes } from 'react'

import * as S from './styles'

export type ButtonColors = 'blue' | 'green' | 'gray'

export type ButtonProps = {
  title?: string
  typeImg: 'Entrada' | 'Saida' | 'Undefined'
  color?: ButtonColors
} & ButtonHTMLAttributes<HTMLButtonElement>

const typeToImageButtonMap: Record<ButtonProps['typeImg'], string> = {
  Entrada: '/assets/entradas.svg',
  Saida: '/assets/saidas.svg',
  Undefined: ''
}

const Button = ({ title, color = 'blue', typeImg, ...props }: ButtonProps) => {
  const imagePath = typeToImageButtonMap[typeImg]

  return (
    <S.WrapperButton {...props} $color={color}>
      {!!imagePath && (
        <Image
          alt="Simbolo que representa o tipo de transação"
          src={imagePath}
          width={24}
          height={24}
        />
      )}

      {title}
    </S.WrapperButton>
  )
}

export default Button
