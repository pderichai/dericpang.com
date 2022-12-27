import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Head from "next/head";

import Navigation from "./navigation";

function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} | Deric Pang` : "Deric Pang"}</title>
        <meta
          name="description"
          content={
            description
              ? description
              : "I'm Deric, and I'm a software engineer."
          }
          key="desc"
        />
      </Head>
      <header>
        <h1 className="site-header">
          <Link href="/">Deric Pang</Link>
        </h1>
      </header>
      <Navigation />
      <main>{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
