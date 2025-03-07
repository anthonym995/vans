import React from "react";
import { useOutletContext } from "react-router-dom";
import Vans from "../Vans/Vans";

export default function HostVanInfo() {
  const { van } = useOutletContext();
  return (
    <section className="mt-3">
      <h4 className="mb-3 text-sm font-bold">
        Name: <span className="font-medium">{van.name}</span>
      </h4>
      <h4 className="mb-3 text-sm font-bold">
        Category: <span className="font-medium">{van.type}</span>
      </h4>
      <h4 className="mb-3 text-sm font-bold">
        Description: <span className="font-medium">{van.description}</span>
      </h4>
      <h4 className=" text-sm font-bold">
        Visibility: <span className="font-medium">Public</span>
      </h4>
    </section>
  );
}
