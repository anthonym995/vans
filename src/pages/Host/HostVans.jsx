import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HostVans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const hostVanEle = vans.map((van) => (
    <Link to={van.id} key={van.id}>
      <div className="rounded-md  flex py-4 mb-5 bg-white shadow-md">
        <img className="h-16 w-16 mx-6 rounded-md" src={van.imageUrl} alt={van.name} />
        <div className="">
          <div className="font-semibold text-[#161616] text-xl mb-2">{van.name}</div>
          <p className="font-medium text-[#4D4D4D] text-base">${van.price} / day</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-[#161616] mb-6">Your listed Vans</h1>
        {vans.length > 0 ? (
          <>{hostVanEle}</>
        ) : (
          <>
            <h1 className="text-center">Loading...</h1>
          </>
        )}
      </div>
    </>
  );
}
