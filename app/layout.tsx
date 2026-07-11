import "styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Jost, Libre_Caslon_Text } from "next/font/google";
import Footer from "components/Footer";
import Header from "components/Header";
import { ThemeProvider } from "./theme-provider";

const primaryFont = Libre_Caslon_Text({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: "400",
});

const secondaryFont = Jost({
  variable: "--font-secondary",
  subsets: ["latin"],
});

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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${primaryFont.variable} ${secondaryFont.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(!t){t=matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
