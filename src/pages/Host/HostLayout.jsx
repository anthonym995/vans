import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

export default function HostLayout() {
  const activeStyle = {
    fontWeight: "semi-bold",
    color: "#161616",
    textDecoration: "underline",
  };
  return (
    <>
      <nav className="py-5">
        <div className="container mx-auto">
          <nav className="flex items-center">
            <NavLink
              to="/host"
              end
              className="text-[#4D4D4D] hover:text-[#161616] pr-5 py-2 font-medium hover:font-semibold hover:underline"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/host/income"
              className="text-[#4D4D4D] hover:text-[#161616] pr-5 py-2 font-medium hover:font-semibold hover:underline"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Income
            </NavLink>
            <NavLink
              to="/host/vans"
              className="text-[#4D4D4D] hover:text-[#161616] pr-5 py-2 font-medium hover:font-semibold hover:underline"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Vans
            </NavLink>

            <NavLink
              to="/host/reviews"
              className="text-[#4D4D4D] hover:text-[#161616] pr-5 py-2 font-medium hover:font-semibold hover:underline"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Reviews
            </NavLink>
          </nav>
        </div>
      </nav>

      <Outlet />
    </>
  );
}
