import Head from "next/head";
import Script from "next/script";
import Footer from "components/Footer";
import Header from "components/Header";
import { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Software Engineer | Seth J Krasnianski</title>
        <meta
          name="description"
          content="Developer of software currently working with the fine folks at MojoTech."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/qka6xnx.css" />
      </Head>
      <Script src="https://use.fonticons.com/13897413.js"></Script>

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
