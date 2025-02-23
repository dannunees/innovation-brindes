import { useState } from 'react'
import { Flex, Text, Spinner } from '@chakra-ui/react'
import { HeaderArea, ProductList, FilterArea } from './components'
import { Product } from './interfaces/Product'
import { fetchProductsByFilters } from './services/productService'
import { parseCookies } from 'nookies'
import { Filter } from './interfaces/Filter'
import Image from 'next/image'

type ProductsProps = {
  products: Product[]
}

export const ProductsPage = ({ products }: ProductsProps) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleFilter = async (filters: Filter) => {
    setIsLoading(true)
    setError(null)

    try {
      const { token } = parseCookies()
      if (!token) return

      const response = await fetchProductsByFilters(token, filters)

      if (response.length === 0) {
        setError('Nenhum produto encontrado.')
      }

      setFilteredProducts(response)
    } catch (error) {
      console.error('Erro ao buscar produtos filtrados:', error)
      setError('Erro ao buscar produtos. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Flex direction="column" width="100%" letterSpacing="-0.8px" bg="#fff">
      <HeaderArea />
      <FilterArea onFilter={handleFilter} />
      <Flex
        maxWidth="1440px"
        margin="0 auto"
        px={12}
        pb={32}
        justify="center"
        align="center"
      >
        {isLoading ? (
          <LoadingComponent />
        ) : error ? (
          <ErrorComponent error={error} />
        ) : (
          <ProductList products={filteredProducts} />
        )}
      </Flex>
    </Flex>
  )
}

const LoadingComponent = () => <Spinner size="xl" color="blue.500" />
const ErrorComponent = ({ error }: { error: string }) => (
  <Flex
    mt={10}
    justifyContent="center"
    alignItems="center"
    height="100%"
    flexDir="column"
    gap={4}
  >
    <Image
      src="/assets/images/errorImage.svg"
      alt="Error"
      width={300}
      height={300}
    />
    <Text fontSize="2rem" color="red.500">
      {error}
    </Text>
  </Flex>
)
