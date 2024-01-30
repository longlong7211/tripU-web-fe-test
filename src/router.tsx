import HomePage from "Pages/HomePage";
import MainLayout from "layouts/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      }
    ]
  },
  {
    path: "*",
    element: <></>
  }
]);

export default router;
