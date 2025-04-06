/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../shared/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "../shared/Footer";
import { ReactLenis, useLenis } from "lenis/react";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <ReactLenis root>
        <Navbar />
        <Outlet />

        {location.pathname !== "/download" && <Footer />}
      </ReactLenis>
    </>
  );
};

export default Layout;
