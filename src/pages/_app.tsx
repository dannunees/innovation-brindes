import type { AppProps } from 'next/app'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import { GeistSans } from 'geist/font'
import { ChakraProvider } from '@chakra-ui/react'
import theme from 'styles/theme'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AuthProvider } from 'core/contexts/AuthContext'
import { getTitle } from 'utils/getTitle'
import { ToastContainer } from 'react-toastify'
import FloatingVideoButton from 'components/FloatingButton'

function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider resetCSS theme={theme}>
        <AuthProvider>
          <NextNProgress
            color="#2979ff"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow={true}
          />

          <ToastContainer />
          <FloatingVideoButton />

          <Head>
            <title>{getTitle()}</title>
            <link rel="shortcut icon" href="/favicon.png" />
            <link rel="apple-touch-icon" href="/favicon.png" />
            <link rel="icon" type="image/x-icon" href="/favicon.png" />
            <meta name="description" content="Innovation Gifts" />
          </Head>

          <main className={GeistSans.className}>
            <Component {...pageProps} />
          </main>
        </AuthProvider>
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default App
