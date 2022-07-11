import React from "react";
import { phoneIcon } from "../assets";

const ForAssistance = ({ assistant }) => {
  return (
    <div className="flex flex-col px-10">
      <div className="flex flex-col">
        <span className="text-sm">For Assitance</span>
        <span className="text-[12px]">
          Contact your regional representative for further <br />
          assistance
        </span>
      </div>
      <div className="flex gap-2 mx-auto pt-2">
        <div className="rounded-full border border-[#505050] w-[34px] h-[34px] items-center justify-center flex">
          <img src={phoneIcon} alt="phone" />
        </div>
        <div className="flex flex-col ">
          <span className="text-sm">{assistant.title}</span>
          <span className="text-[13px]">{assistant.phone}</span>
        </div>
      </div>
    </div>
  );
};

export default ForAssistance;
