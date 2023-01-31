import 'src/styles/globals.css'
import Header from 'src/components/Header'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />

      <Component {...pageProps} />
    </div>
  )
}
