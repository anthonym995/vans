import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
  const { van } = useOutletContext();
  return (
    <section className="mt-3">
      <img className="w-24 h-24 rounded-md" src={van.imageUrl} alt={van.name} />
    </section>
  );
}
