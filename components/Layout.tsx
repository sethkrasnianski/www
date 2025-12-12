import Footer from "components/Footer";
import Header from "components/Header";
import { PropsWithChildren } from "react";

/**
 * @deprecated This component is no longer used.
 * The layout is now handled by the App Router's root layout at app/layout.tsx.
 * This file is kept temporarily for reference and can be deleted.
 */
const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
