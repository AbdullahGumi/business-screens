import React from "react";
import BankAccountDetail from "./BankAccountDetail";
import BillingUpload from "./BillingUpload";

const details = {
  title: "Node0 Computing PVT Limited",
  accNo: "02222222987755",
  bankName: "Meezan Bank",
  branchCode: "0257 DHA Phase 5",
  iban: "PK51MEZN0002570104987755",
};

const BillingTab = () => {
  return (
    <div className="flex flex-col gap-4 py-5">
      <BankAccountDetail details={details} />
      <hr className="mx-5 bg-[#707070]" />
      <BillingUpload />
    </div>
  );
};

export default BillingTab;
