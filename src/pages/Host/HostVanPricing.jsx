import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
    const { van } = useOutletContext();
  return (
    <section className="mt-3">
      <h4 className="mb-3 text-2xl font-medium text-[#161616]">
        ${van.price}.00 <span className="text-base text-[#4D4D4D] font-medium">/day</span>
      </h4>
    </section>
  );
}
