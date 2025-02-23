export const getTitle = () => {
  if (typeof window !== 'undefined') {
    const userData = localStorage.getItem('dados_usuario')
    if (userData) {
      const { nome_usuario, codigo_usuario } = JSON.parse(userData)
      return `Innovation Gifts - ${nome_usuario} / ${codigo_usuario}`
    }
  }
  return 'Innovation Gifts'
}
