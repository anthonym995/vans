import { Link, NavLink } from "react-router-dom";
import userIcon from "../assets/user.png";

const Header = () => {
  const activeStyle = {
    textDecoration: "underline",
    color: "#161616",
    fontWeight: "semi-bold",
  };
  return (
    <>
      <header className="bg-[#FFF7ED] py-4 fixed top-0 z-50 shadow-md w-full mx-auto">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-black px-3">
              #VANLIFE
            </Link>
            <nav>
              <NavLink
                to="/host"
                className="px-3 py-1 hover:underline text-[#4D4D4D] hover:text-[#161616] font-semibold"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                Host
              </NavLink>
              <NavLink
                to="/about"
                className="px-3 py-1 hover:underline text-[#4D4D4D] hover:text-[#161616] font-semibold"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                About
              </NavLink>
              <NavLink
                to="/vans"
                className="px-3 py-1 hover:underline text-[#4D4D4D] hover:text-[#161616] font-semibold"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                Vans
              </NavLink>
              <NavLink
                to="/login"
                className="px-3 py-1 hover:underline text-[#4D4D4D] hover:text-[#161616] font-semibold"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                <img className="w-5 h-5 inline-block" src={userIcon} alt="" />
              </NavLink>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
