import { ProductItem } from '.'
import { Product } from '../interfaces/Product'
import { Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'

type ProductListProps = {
  products: Product[] | null | undefined
}

const MotionFlex = motion(Flex)

const ProductList = ({ products }: ProductListProps) => {
  return (
    <Flex flexWrap="wrap" justifyContent="center" gap={12}>
      {products?.map((product, index) => (
        <MotionFlex
          key={product.codigo}
          w={{ base: '100%', sm: '48%', md: '30%', lg: '18%' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <ProductItem product={product} />
        </MotionFlex>
      ))}
    </Flex>
  )
}

export default ProductList
