import React from "react";
import AssistanceTabMainVideo from "./AssistanceTabMainVideo";

//redux
import { useSelector } from "react-redux";
import { userSelector } from "../redux/user/userSlice";
import ForAssistance from "./ForAssistance";
import BankAccountDetail from "./BankAccountDetail";
import JazzCash from "./JazzCash";

const details = {
  title: "ABCD EF GH O GLFJKKKFFKJF",
  accNo: "0J2323233532125",
  bankName: "Meezan Bank",
  branchCode: "0257 DHA Phase 5",
  iban: "5555555555555555",
};

const AssistanceTab = () => {
  const { loading } = useSelector(userSelector);

  return (
    <div>
      {!loading && (
        <div className="flex flex-col gap-4">
          <AssistanceTabMainVideo />
          <ForAssistance />
          <hr className="mx-5 bg-[#707070]" />
          <BankAccountDetail details={details} />
          <hr className="mx-5 bg-[#707070]" />
          <JazzCash />
          <hr className="mx-5 bg-[#707070]" />
          <div>
            <span className="px-5 text-[15px]">How to use One Call App?</span>
            <iframe
              title="v"
              className="h-[214px] w-full py-2"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            />
          </div>
          <hr className="mx-5 bg-[#707070]" />
          <div>
            <span className="px-5 text-[15px]">
              How to Create Business Profile?
            </span>
            <iframe
              title="v"
              className="h-[214px] w-full py-2"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AssistanceTab;
