import { Outlet } from "react-router-dom";
import { Header } from "./Header";

import React from "react";
function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default MainLayout;