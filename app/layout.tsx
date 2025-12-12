import "styles/globals.css";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import Footer from "components/Footer";
import Header from "components/Header";
import { ThemeProvider } from "./theme-provider";

export const metadata: Metadata = {
  title: "Software Engineer | Seth J Krasnianski",
  description:
    "Developer of software currently working with the fine folks at MojoTech.",
  icons: {
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/qka6xnx.css" />
      </head>
      <body>
        <Script src="https://use.fonticons.com/13897413.js" />
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
