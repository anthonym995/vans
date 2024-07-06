import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <div className="wrapper flex flex-col min-h-screen relative">
        <Header />
        <main className="flex-grow pt-[60px] min-h-[95vh]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
