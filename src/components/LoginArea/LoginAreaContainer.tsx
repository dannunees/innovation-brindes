import { useForm } from 'react-hook-form'

import { useAuth } from 'core/contexts/AuthContext'
import { FieldValues } from 'react-hook-form'
import LoginAreaPresentational from './LoginAreaPresentational'
import useToast from 'core/hooks/useToast'

const LoginAreaContainer = () => {
  const methods = useForm()
  const { login, isLoading } = useAuth()
  const { handleSubmit } = methods
  const { showError } = useToast()

  const onSubmit = async (data: FieldValues) => {
    try {
      await login(data.username, data.password)
    } catch (error) {
      showError('Usuário ou senha incorretos!')
    }
  }

  return (
    <LoginAreaPresentational
      methods={methods}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      isLoading={isLoading}
    />
  )
}

export default LoginAreaContainer
