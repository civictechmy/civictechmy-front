import React from "react";
import HomepageClient from "./page.client";
import { cn } from "@/lib/utils";
import config from "@payload-config";
import { getPayload } from "payload";
import HeroSection from "@/components/home/hero-section";

export default async function HomePage({ params }: ServerPageProps) {
  const { locale } = await params;
  const payload = await getPayload({ config });

  const homepage = await payload.findGlobal({
    slug: "homepage",
    locale: locale as "en-GB" | "ms-MY",
    depth: 3,
  });
  const siteInfo = await payload.findGlobal({
    slug: "site-info",
    locale: locale as "en-GB" | "ms-MY",
    depth: 3,
  });

  const products = await payload.find({
    collection: "products",
    locale: locale as "en-GB" | "ms-MY",
    pagination: false,
  });

  return (
    <>
      <section
        className={cn(
          "mx-auto grid h-[850px] w-full grid-cols-4 gap-4.5 px-10 md:h-[900px] md:grid-cols-8 md:gap-6 md:px-[84px] lg:h-[628px] lg:grid-cols-12",
          // Image background
          "bg-[url('/static/images/home/img-bg-hero-mobile.svg')] bg-cover bg-center bg-no-repeat md:bg-[url('/static/images/home/img-bg-hero-tablet.svg')] lg:bg-[url('/static/images/home/img-bg-hero-desktop.svg')]",
        )}
      >
        <HeroSection
          heroTitle={homepage["hero-title"]}
          heroTypewriterText={
            homepage["hero-typewriter-text"] &&
            homepage["hero-typewriter-text"].length > 0
              ? homepage["hero-typewriter-text"][0].text
              : ""
          }
          heroDescription={homepage["hero-description"]}
        />
      </section>

      <HomepageClient
        homepage={homepage}
        siteInfo={siteInfo}
        products={products.docs}
      />
    </>
  );
}
