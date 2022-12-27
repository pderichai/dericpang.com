import Navigation from "./navigation";

import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

function Layout({ children }) {
  return (
    <>
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
