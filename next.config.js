const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,
  publicRuntimeConfig: {
    APP_NAME: "CIVICTECH.MY | Civic Technology Community Malaysia",
    META_AUTHOR: "Civic Tech Community Malaysia",
    META_THEME: "#13293D",
    META_KEYWORDS: "Official Website for Civic Technology Community Malaysia",
    META_DOMAIN: "CIVICTECH.MY",
    META_URL: process.env.NEXT_PUBLIC_APP_URL,
    META_IMAGE: `${process.env.NEXT_PUBLIC_APP_URL}/static/images/og_{{lang}}.png`,
  },
};

module.exports = nextConfig;
