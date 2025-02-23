import { useState, useEffect } from 'react'

export type UserProfile = {
  codigo_usuario: string
  nome_usuario: string
  codigo_grupo: string
  nome_grupo: string
}

export function useProfile() {
  const [profile, setProfile] = useState<UserProfile | undefined>(undefined)

  useEffect(() => {
    const userData = localStorage.getItem('dados_usuario')
    if (userData) {
      try {
        const parsedData: UserProfile = JSON.parse(userData)
        setProfile(parsedData)
      } catch (error) {
        console.error('Failed to parse user data from localStorage', error)
      }
    }
  }, [])

  return profile
}
