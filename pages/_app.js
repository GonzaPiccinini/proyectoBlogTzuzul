import '../styles/globals.css'
import Page from '../components/Page'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Page>
        <Component {...pageProps} />
      </Page>  
    </SessionProvider>
  )
}

export default MyApp
