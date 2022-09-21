import "styles/globals.css";
import "styles/Home.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import Header from "components/Header";
import Footer from "components/Footer";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Software Engineer | Seth J Krasnianski</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/qka6xnx.css" />
      </Head>
      <Script src="https://use.fonticons.com/13897413.js"></Script>

      <Header />

      <main>
        <Component {...pageProps} />
      </main>

      <Footer />
    </>
  );
}

export default App;
