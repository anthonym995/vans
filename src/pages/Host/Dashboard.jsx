import React, { Suspense } from "react";
import { Link, defer, Await, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api/api";
import { requireAuth } from "../../utils/utils";
import { BsStarFill } from "react-icons/bs";
import Loading from "../../component/Loading";

export async function loader({ request }) {
  await requireAuth(request);
  return defer({ vans: getHostVans() });
}

export default function Dashboard() {
  const vansPromise = useLoaderData();

  function renderVanElements(vans) {
    const hostVanEle = vans.map((van) => (
      <div key={van.id}>
        <div className="rounded-md  flex py-4 mb-5 bg-white shadow-md relative items-center">
          <img className="h-16 w-16 mx-6 rounded-md" src={van.imageUrl} alt={van.name} />
          <div className="">
            <div className="font-semibold text-[#161616] text-xl mb-2">{van.name}</div>
            <p className="font-medium text-[#4D4D4D] text-base">${van.price} / day</p>
          </div>
          <Link to={`vans/${van.id}`} className="font-medium absolute right-5">
            View
          </Link>
        </div>
      </div>
    ));
    return <>{hostVanEle}</>;
  }
  return (
    <>
      <div className="container mx-auto">
        <section className="bg-[#FFEAD0] pt-6 p-4">
          <h1 className="text-4xl font-bold text-[#161616] mb-8">Welcome</h1>
          <div className="flex justify-between mb-6">
            <p className="text-base font-medium text-[#4D4D4D]">
              Income last <span className="font-bold">30 days</span>
            </p>
            <Link to="income" className="font-medium text-[#161616]">
              Details
            </Link>
          </div>

          <h2 className="text-4xl font-extrabold mb-6">$2,260</h2>
        </section>
        <section className="p-4 bg-[#FFDDB2] flex justify-between py-6">
          <div className="flex items-center">
            <h2 className="text-2xl font-bold mr-3">Review score</h2>
            <BsStarFill className="star text-[#FF8C38] mr-3" />
            <p className="text-xl font-medium">
              <span className="font-bold">5.0</span>/5
            </p>
          </div>

          <Link to="reviews" className="font-medium text-[#161616]">
            Details
          </Link>
        </section>
        <section className="p-4">
          <div className="flex justify-between my-6">
            <h2 className="text-2xl font-bold">Your listed vans</h2>
            <Link to="vans" className="font-medium">
              View all
            </Link>
          </div>
          <Suspense fallback={<Loading />}>
            <Await resolve={vansPromise.vans}>{renderVanElements}</Await>
          </Suspense>
        </section>
      </div>
    </>
  );
}
