import React from 'react'
import { Heading, Layout, LoginArea } from '../components'
import { TokenContext } from '../components'

export default function Login() {
  return (
    <TokenContext>
      <Layout>
        <Heading title="Bem-vindo a Innovation Brindes" />
        <LoginArea />
      </Layout>
    </TokenContext>
  )
}
