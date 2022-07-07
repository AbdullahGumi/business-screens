import React from "react";

const BillingUpload = () => {
  return (
    <div className="flex flex-col px-5 gap-14">
      <span className="text-sm">Please Upload the Image of your receipt:</span>
      <input type="file" />
      <button className="rounded-sm  bg-[#eee] w-[87px]">Submit</button>
    </div>
  );
};

export default BillingUpload;
