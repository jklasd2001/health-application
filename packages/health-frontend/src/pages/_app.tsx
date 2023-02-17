import { Fragment } from 'react'

import Head from 'next/head'

import type { AppProps } from 'next/app'

import 'src/styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
      </Head>

      <div className="min-w-[320px] max-w-md mx-auto">
        <div className="sticky top-0">header</div>
        <Component {...pageProps} />
      </div>
    </Fragment>
  )
}

export default App
