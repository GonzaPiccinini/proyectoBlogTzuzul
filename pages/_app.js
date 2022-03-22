import '../styles/globals.css'
import Page from '../components/Page'
import { SessionProvider } from 'next-auth/react'
import { Router } from 'next/router'
import ProgressBar from '@badrap/bar-of-progress'

const progress = new ProgressBar({
  size: 2,
  color: 'rgb(14, 165, 233)',
  className: 'bar-of-progress',
  delay: 100,
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

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
