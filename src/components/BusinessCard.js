import React from "react";
import { close, phoneIcon } from "../assets";

const BusinessCard = ({ fav: { image, title, address, phone } }) => {
  return (
    <div
      className="flex justify-between items-center gap-6"
      onClick={() => alert("card")}
    >
      <img src={image} alt="fav1" className="w-[76px] h-[54px] rounded-lg" />
      <div className="flex flex-col mr-auto">
        <span className="text-sm font-[LatinkaMedium]">{title}</span>
        <span className="text-[10px] text-primaryText">{address}</span>
      </div>
      <div className="flex gap-2">
        <div
          onClick={(e) => {
            alert("close button pressed");
            e.stopPropagation();
          }}
          className="rounded-full border border-[#505050] w-[29px] h-[29px] items-center justify-center flex"
        >
          <img src={close} alt="close" />
        </div>
        <div
          onClick={(e) => {
            alert(`phone: ${phone}`);
            e.stopPropagation();
          }}
          className="rounded-full border border-[#505050] w-[29px] h-[29px] items-center justify-center flex"
        >
          <img src={phoneIcon} alt="phone" />
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
