import aboutImg from "../assets/about.png";
import { Link } from "react-router-dom"

const About = () => {
  return (
    <>
      <section className="overflow-y-auto">
        <div className="container-fluid mx-auto">
          <img src={aboutImg} alt="hero-image" className="w-full" />
        </div>
        <div className="container mx-auto">
          <div className="px-6 text-gray-900 mb-14">
            <h1 className="leading-9 mb-6 text-3xl font-bold mt-4">
              Don’t squeeze in a sedan when you could relax in a van.
            </h1>
            <p className="leading-5 mb-6">
              Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified
              before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)
            </p>
            <p className="leading-5 mb-3">
              Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels
            </p>
          </div>
          <div className="bg-[#FFCC8D] text-gray-900 px-8 pb-8 mx-7 rounded-lg mb-7">
            <h2 className="mb-0 py-12 text-2xl font-bold leading-10">
              Your destination is waiting. Your van is ready.
            </h2>
            <Link to="/vans" className="bg-[#161616] text-white rounded-xl px-4 py-3">Explore our vans</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
