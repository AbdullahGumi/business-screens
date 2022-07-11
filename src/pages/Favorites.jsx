import React, { useEffect } from "react";
import BusinessCard from "../components/BusinessCard";
import {
  businessSelector,
  fetchBusiness,
} from "../redux/business/businessSlice";
import { useDispatch, useSelector } from "react-redux";

const Favorites = () => {
  const dispatch = useDispatch();
  const { business } = useSelector(businessSelector);

  useEffect(() => {
    dispatch(fetchBusiness());
  }, [dispatch]);

  return (
    <div className="p-5 flex flex-col">
      <h3 className="uppercase text-center text-primaryText text-[22px]  font-[LatinkaMedium] mb-12">
        Favorites
      </h3>
      <div className="flex flex-col gap-10">
        {business.length > 0 &&
          business.map((fav, i) => <BusinessCard key={i} fav={fav} />)}
      </div>
    </div>
  );
};

export default Favorites;
