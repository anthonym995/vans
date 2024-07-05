import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <div className="flex flex-col min-h-screen max-w-4xl mx-auto">
        <Header />
        <main className="flex-grow overflow-y-auto">
          <Outlet /> 
        </main>
        <Footer />
      </div>
    </>
  );
}
