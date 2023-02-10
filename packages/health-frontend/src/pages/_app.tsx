import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'

import { ReactQueryDevtools } from 'react-query/devtools'

import { AppProvider } from 'src/components/contexts/appcontext'
import Header from 'src/components/Header'

import type { AppProps } from 'next/app'

import 'src/styles/globals.css'

const client = new QueryClient({
  defaultOptions: {},
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools />
      <Hydrate state={pageProps.dehydratedState}>
        <AppProvider>
          <Header />
          <Component {...pageProps} />
        </AppProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}
