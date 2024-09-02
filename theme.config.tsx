import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: () => (
    <>
      <img
        src="/studio-pro/favicon/android-chrome-180x180.png"
        width={32}
        height={32}
      />
      <span
        style={{
          fontWeight: "bold",
          fontSize: "1.2rem",
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        Wrtn Technologies
      </span>
      <span>Studio Pro Documents</span>
    </>
  ),
  footer: {
    text: () => (
      <span>
        Made by{" "}
        <a href="https://wrtn.ai" target="_blank" style={{ color: "blue" }}>
          <u> Wrtn Technologies </u>
        </a>
      </span>
    ),
  },
  // project: {
  //   link: "https://github.com/wrtnio/studio",
  // },
  docsRepositoryBase: "https://github.com/wrtnio/studio/blob/main",
  useNextSeoProps() {
    return {
      defaultTitle: "Studio Documents",
      titleTemplate: "Studio Documents - %s",
      additionalLinkTags: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicon/apple-touch-icon.png",
        },
        {
          rel: "manifest",
          href: "/favicon/site.webmanifest",
        },
        ...[16, 32].map((size) => ({
          rel: "icon",
          type: "image/png",
          sizes: `${size}x${size}`,
          href: `/favicon/favicon-${size}x${size}.png`,
        })),
      ],
      additionalMetaTags: [
        {
          property: "og:image",
          content:
            "https://wrtn.io/wp-content/themes/wrtn-ko/images/ogimage.jpg",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:title",
          content: "Wrtn Technologies Studio Pro Documents",
        },
        {
          property: "og:description",
          content: "Wrtn Technologies Studio Pro Documents",
        },
        {
          property: "og:site_name",
          content: "Wrtn Technologies Studio Pro Documents",
        },
        {
          property: "og:url",
          content: "https://wrtn.ai/studio",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:image",
          content:
            "https://wrtn.io/wp-content/themes/wrtn-ko/images/ogimage.jpg",
        },
        {
          name: "twitter:title",
          content: "Wrtn Technologies Studio Pro Documents",
        },
        {
          name: "twitter:description",
          content: "Wrtn Technologies Studio Pro Documents",
        },
      ],
    };
  },
};

export default config;
