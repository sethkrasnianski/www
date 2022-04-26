import 'styles/globals.css'
import 'styles/Home.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Software Engineer | Seth J Krasnianski</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/qka6xnx.css" />
      </Head>
      <Script src="https://use.fonticons.com/13897413.js"></Script>
      <header>
        <Link href="/">
          <a>
            <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122 82" width="51px" height="31px">
              <path className="a outline" d="M0,0V82H122V0H0ZM117,77H5V5H117V77Z"></path>
              <path className="a" d="M40.88,25.78a12.74,12.74,0,0,0-4.1-4.67A11.41,11.41,0,0,0,30,19.22c-6.82,0-11.81,4.36-11.81,10.86A8.74,8.74,0,0,0,21.12,37a18.64,18.64,0,0,0,5.62,3.47l3.79,1.77a18.37,18.37,0,0,1,5,2.9,6.28,6.28,0,0,1,2,4.92c0,4.23-2.71,8.33-8.46,8.33A8,8,0,0,1,23.11,56a9.94,9.94,0,0,1-2.53-5.37L16,51.92a15.26,15.26,0,0,0,3.91,7.45,12.56,12.56,0,0,0,9.15,3.41c7.58,0,13.32-5.18,13.32-12.94a10.13,10.13,0,0,0-3-7.64,20.45,20.45,0,0,0-6.5-4l-4-1.77a13.75,13.75,0,0,1-4.42-2.65,4.42,4.42,0,0,1-1.62-3.64c0-3.91,2.9-6.5,7.07-6.5a7.58,7.58,0,0,1,4.73,1.45,10.15,10.15,0,0,1,2.46,3.16Zm16.44-5.87V50.34c0,2.59,0,5.24-1.58,6.82a4.44,4.44,0,0,1-3.16,1.2A6.81,6.81,0,0,1,47.76,56l-2.59,3.66a9.55,9.55,0,0,0,7.51,3.09,8.65,8.65,0,0,0,6.69-2.65c2.53-2.65,2.6-6.5,2.6-9.91V19.91H57.32Zm23.75,0h-4.7V62H81V43.9l1.2-1.2L99.52,62H106L85.59,39.55l19.7-19.63H99L81,38V19.91h0Z"></path>
            </svg>
          </a>
        </Link>
        <ul className="menu right">
          <li><Link href="/thoughts"><a>Thoughts</a></Link></li>
          <li><Link href="/contact"><a>Contact</a></Link></li>
        </ul>
      </header>

      <main>
        <Component {...pageProps} />
      </main>

      <footer className="content">
        <a className="social-github" href="http://github.com/sethkrasnianski">
          <i className="icon icon-github"></i>
        </a>
        <a className="social-linkedin" href="http://linkedin.com/pub/seth-krasnianski/30/295/55">
          <i className="icon icon-linkedin-square">
          </i>
        </a>
        <div className="right menu"><a href="/contact">Contact</a></div>
      </footer>
    </>
  )
}

export default App