import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {
  const { currentVan } = useOutletContext();
  return (
    <section className="mt-3">
      <h4 className="mb-3 text-sm font-bold">
        Name: <span className="font-medium">{currentVan.name}</span>
      </h4>
      <h4 className="mb-3 text-sm font-bold">
        Category: <span className="font-medium">{currentVan.type}</span>
      </h4>
      <h4 className="mb-3 text-sm font-bold">
        Description: <span className="font-medium">{currentVan.description}</span>
      </h4>
      <h4 className=" text-sm font-bold">
        Visibility: <span className="font-medium">Public</span>
      </h4>
    </section>
  );
}
