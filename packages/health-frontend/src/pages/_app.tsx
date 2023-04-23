import { memo } from 'react'

import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'

import { BottomNavigation, Header, Layout } from 'src/layout'

import type { AppProps } from 'next/app'

import 'src/styles/globals.css'

const App = memo(({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
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
        <div className="p-4 h-[calc(100vh_-_56px_-_52px)]">
          <Component {...pageProps} />
        </div>

        <BottomNavigation />
      </Layout>
    </SessionProvider>
  )
})

App.displayName = 'App'

export default App
