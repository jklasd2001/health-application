import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'

import { BottomNavigation, Header, Layout } from 'src/components'

import type { AppProps } from 'next/app'

import 'src/styles/globals.css'

const App = ({ Component, pageProps: { session, ...pageProps }, router }: AppProps) => {
  console.log(router)
  return (
    <SessionProvider session={session}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
      </Head>

      <Layout>
        <Header />
        <Component {...pageProps} />
        <BottomNavigation />
      </Layout>
    </SessionProvider>
  )
}

export default App
