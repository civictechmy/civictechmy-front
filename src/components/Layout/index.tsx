import Header from "@components/Layout/Header";
import Footer from "@components/Layout/Footer";
import { FunctionComponent, ReactNode } from "react";
import Hero from "../Hero";

interface LayoutProps {
  className?: string;
  children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ className, children }) => {
  return (
    <div className={className}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
