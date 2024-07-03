import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* <header className="h-20 flex items-center bg-[#FFF7ED]">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">
              #VANSLIFE
            </Link>
            <nav className="">
              <Link to="/" className="px-3 py-1 text-base font-semibold hover:underline">
                Home
              </Link>
              <Link to="/about" className="px-1 py-2 text-base font-semibold hover:underline">
                About
              </Link>
            </nav>
          </div>
        </div>
      </header> */}
      <header className="bg-[#FFF7ED] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-black">
            #VANSLIFE
          </Link>
          <nav>
            <Link to="/" className="px-2 hover:underline text-black font-semibold">
              Home
            </Link>
            <Link to="/about" className="px-2 hover:underline text-black font-semibold">
              About
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
