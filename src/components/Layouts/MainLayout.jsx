import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../UI/Navbar";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );
}
