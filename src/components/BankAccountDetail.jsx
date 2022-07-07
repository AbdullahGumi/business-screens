import React from "react";

const BankAccountDetail = ({
  details: { title, accNo, bankName, branchCode, iban },
}) => {
  return (
    <div className="flex flex-col px-10">
      <span className="text-sm mb-1">Bank Account Detail</span>
      <div className="text-primaryText">
        <div className="flex">
          <span className="text-xs w-1/2 ">Account Title:</span>
          <span className="text-xs w-1/2 ">{title}</span>
        </div>
        <div className="flex">
          <span className="text-xs w-1/2 ">Account No: </span>
          <span className="text-xs w-1/2 ">{accNo}</span>
        </div>
        <div className="flex">
          <span className="text-xs w-1/2 ">Bank Name: </span>
          <span className="text-xs w-1/2 ">{bankName}</span>
        </div>
        <div className="flex">
          <span className="text-xs w-1/2 ">Branch Code: </span>
          <span className="text-xs w-1/2 ">{branchCode}</span>
        </div>
        <div className="flex">
          <span className="text-xs w-1/2 ">IBAN#</span>
          <span className="text-xs w-1/2 ">{iban}</span>
        </div>
      </div>
    </div>
  );
};

export default BankAccountDetail;
