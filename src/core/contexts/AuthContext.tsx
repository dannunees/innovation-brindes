import { createContext, useState, useContext, ReactNode } from 'react'
import { useMutation } from 'react-query'
import axios from 'axios'
import { useRouter } from 'next/router'
import { setCookie, destroyCookie, parseCookies } from 'nookies'
import useToast from 'core/hooks/useToast'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || ''

type AuthContextType = {
  token: string | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const cookies = parseCookies()
  const { showSuccess, showError } = useToast()

  const [token, setToken] = useState<string | null>(cookies.token || null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const mutation = useMutation(
    async ({ email, password }: { email: string; password: string }) => {
      const response = await axios.post(`${API_BASE_URL}/login/acessar`, {
        email,
        senha: password
      })
      return response.data
    },
    {
      onMutate: () => {
        setIsLoading(true)
      },
      onSuccess: (data) => {
        try {
          if (data.status === 1) {
            showSuccess('Tudo certo! Redirecionando você agora 🥳')
            setToken(data.token_de_acesso)

            const expirationTime = 60 * 60 * 24 // 1 day of expiration
            setCookie(null, 'token', data.token_de_acesso, {
              maxAge: expirationTime,
              path: '/',
              secure: true,
              httpOnly: false
            })

            localStorage.setItem(
              'dados_usuario',
              JSON.stringify(data.dados_usuario)
            )

            router.push('/products')
          } else {
            showError(data.message ?? 'Login failed. Check your credentials.')
          }
        } catch (error) {
          showError('Ocorreu um erro ao fazer login.')
        } finally {
          setIsLoading(false)
        }
      },
      onError: () => {
        setIsLoading(false)
        showError('Ocorreu um erro ao fazer login.')
      }
    }
  )

  function login(email: string, password: string) {
    return mutation.mutateAsync({ email, password })
  }

  function logout() {
    setToken(null)
    destroyCookie(null, 'token')
    localStorage.removeItem('dados_usuario')
    router.push('/')
  }

  return (
    <AuthContext.Provider value={{ token, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within an AuthProvider')

  return context
}
