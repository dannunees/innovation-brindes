import axios from 'axios'
import { Filter } from '../interfaces/Filter'
import { type Product } from '../interfaces/Product'

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL || ''

export const fetchProducts = async (token: string) => {
  const response = await axios.get<Product[]>(`${API_URL}/produtos/listar`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })

  return response.data
}

export const fetchProductsByFilters = async (
  token: string,
  filters: Filter
) => {
  if (!filters.nome_produto && !filters.codigo_produto) {
    throw new Error('Pelo menos um filtro deve ser fornecido.')
  }

  const response = await axios.post<Product[]>(
    `${API_URL}/produtos/listar`,
    filters,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }
  )

  return response.data
}
