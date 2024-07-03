import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <section className="bg-home min-h-[350px] bg-cover py-11 px-6">
        <div className="container mx-auto">
          <h1 className="text-white text-4xl font-bold leading-10 mb-6">
            You got the travel plans, we got he travel vans.
          </h1>
          <p className="text-white leading-6 mb-6">
            Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road
            trip.
          </p>
          <Link
            to="vans"
            className="inline-block text-center no-underline bg-[#FF8C38] border-none w-full mt-[27px] py-3 text-white font-bold rounded cursor-pointer transition-transform duration-100 ease-in-out"
          >  Find your vans</Link>
        </div>
      </section>
    </>
  );
};

export default Home;
