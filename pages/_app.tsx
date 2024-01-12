import { AppProps } from 'next/app'
import "@/styles/globals.css"
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    return ( 
    <div>
    <Component {...pageProps} />
      <Head>
    {/* preconnect scripts... */ }
    <link
    href='https://fonts.googleapis.com/css2?family=Kanit&family=Sora:wght@700&display=swap'
    rel="stylesheet"
                />
                <link rel="icon" href="@/public/icons/sabilink.svg" />
            </Head >
            </div>
    )
}

export default MyApp

  
