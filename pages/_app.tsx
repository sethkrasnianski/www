import "styles/globals.css";

import type { AppProps } from "next/app";
import Layout from "components/Layout";
import { useEffect } from "react";

function App({ Component, pageProps }: AppProps) {
  const setDarkTheme = (dark: boolean) => {
    if (dark) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleChangeTheme = (e: MediaQueryListEvent) =>
      setDarkTheme(e.matches);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setDarkTheme(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleChangeTheme);
    return () => mediaQuery.removeEventListener("change", handleChangeTheme);
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
