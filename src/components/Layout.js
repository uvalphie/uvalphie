import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import "../../static/_globalvariables.scss";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();

  const isBrowser = typeof window !== `undefined`;

  let navbar = null;
  if (isBrowser) {
    const url = window.location.href;
    if (url.includes("news")) {
      navbar = <div></div>;
    } else {
      navbar = <Navbar />;
    }
  }
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} charSet="utf-8" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@900&display=swap"
          rel="stylesheet"
          as="style"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
          rel="stylesheet"
          as="style"
        ></link>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>

      {navbar}
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
