"use client";

import { default as Footer } from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Footer as FooterType, Navbar, SiteInfo } from "@/payload-types";

export default function LocaleClientLayout({
  children,
  navbar,
  footer,
  siteInfo,
}: Readonly<{
  children: React.ReactNode;
  navbar: Navbar;
  footer: FooterType;
  siteInfo: SiteInfo;
}>) {
  return (
    <>
      <main
        className={
          "box-border flex h-full min-h-screen flex-col bg-bg-white font-body text-body-sm text-txt-black-900"
        }
      >
        <Header headerData={navbar} />
        {children}
        <Footer siteInfo={siteInfo} footerData={footer} />
      </main>
    </>
  );
}
