import React from "react";

const JazzCash = ({ details: { title, accNo } }) => (
  <div className="flex flex-col px-10">
    <span className="text-sm mb-1">Jazz Cash</span>
    <div className="text-primaryText">
      <div className="flex">
        <span className="text-xs w-1/2 ">Account Title: </span>
        <span className="text-xs w-1/2 ">{title}</span>
      </div>
      <div className="flex">
        <span className="text-xs w-1/2 ">Account Number: </span>
        <span className="text-xs w-1/2 ">{accNo}</span>
      </div>
    </div>
  </div>
);

export default JazzCash;
