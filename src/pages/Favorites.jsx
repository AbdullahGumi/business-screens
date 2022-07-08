import React from "react";
import { fav1, fav2, fav3, fav4 } from "../assets";
import BusinessCard from "../components/BusinessCard";

const Favorites = () => {
  const favroites = [
    {
      image: fav1,
      title: "London stock",
      subTitle: "Career start, 17-06-2018",
    },
    {
      image: fav2,
      title: "London stock",
      subTitle: "Career start, 17-06-2018",
    },
    {
      image: fav3,
      title: "London stock",
      subTitle: "Career start, 17-06-2018",
    },
    {
      image: fav4,
      title: "London stock",
      subTitle: "Career start, 17-06-2018",
    },
  ];

  return (
    <div className="p-5 flex flex-col">
      <h3 className="uppercase text-center text-primaryText text-[22px]  font-[LatinkaMedium] mb-12">
        Favorites
      </h3>
      <div className="flex flex-col gap-10">
        {favroites.map((fav) => (
          <BusinessCard fav={fav} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
