import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { ProductsPage } from 'modules/products/ProductsPage'
import { Product } from 'modules/products/interfaces/Product'
import { fetchProducts } from 'modules/products/services/productService'

export default function Products({ products }: { products: Product[] }) {
  return <ProductsPage products={products} />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  try {
    const products = await fetchProducts(token)

    return {
      props: {
        products
      }
    }
  } catch (error) {
    return {
      props: {
        products: []
      }
    }
  }
}
