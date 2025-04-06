import React from "react";
import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import DownloadMezza from "../pages/DownloadMezza";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/download",
        element: <DownloadMezza/>,
      },
    ],
  },
]);

export default Router;
