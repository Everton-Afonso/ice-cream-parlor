'use client'

import { useState } from 'react'

import Button from '@/UI/Button'

import * as S from './styles'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <S.WrapperLogin>
      <form>
        <p>Sign in to your account</p>

        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button title="Login" color="green" type="submit" typeImg="Undefined" />
      </form>
    </S.WrapperLogin>
  )
}

export default Login
