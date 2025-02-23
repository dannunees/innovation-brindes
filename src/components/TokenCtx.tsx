import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { parseCookies } from 'nookies'
import { Loading } from '.'

const TokenCtx = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const { token } = parseCookies()
    if (token) {
      router.push('/products')
    } else {
      setLoading(false)
    }
  }, [router])

  if (loading) return <Loading />

  return <>{children}</>
}

export default TokenCtx
