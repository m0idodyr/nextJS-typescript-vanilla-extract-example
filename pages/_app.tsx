import { DefaultSeo, SocialProfileJsonLd } from 'next-seo'
import type { AppProps } from 'next/app'
import { AppType } from 'next/app'
import Head from 'next/head'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import '../styles/app.css'
import { trpc } from '../trpc'
import SEO from './../components/SEO/next-seo.config'

const App: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/puo1flr.css" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <SocialProfileJsonLd
        type={'Organization'}
        name={'3rd Lab'}
        url={'https://3rdlab.xyz/'}
        sameAs={[
          'https://www.facebook.com/3rdlabdev',
          'https://www.instagram.com/3rdlabdev',
          'https://www.linkedin.com/company/3rdlabdev',
          'https://twitter.com/3rdlabdev',
        ]}
      ></SocialProfileJsonLd>
      <DefaultSeo {...SEO} />
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default trpc.withTRPC(App)
