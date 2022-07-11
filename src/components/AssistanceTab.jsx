import React, { useEffect } from "react";
import AssistanceTabMainVideo from "./AssistanceTabMainVideo";

//redux
import { useSelector } from "react-redux";
import { bankSelector, fetchBank } from "../redux/bank/bankSlice";
import { useDispatch } from "react-redux";

import ForAssistance from "./ForAssistance";
import BankAccountDetail from "./BankAccountDetail";
import JazzCash from "./JazzCash";

const AssistanceTab = () => {
  const dispatch = useDispatch();
  const { bank } = useSelector(bankSelector);

  useEffect(() => {
    dispatch(fetchBank());
  }, [dispatch]);

  return (
    <div>
      {Object.keys(bank).length > 0 && (
        <div className="flex flex-col gap-4">
          <AssistanceTabMainVideo />
          <ForAssistance assistant={bank.regionalRep} />
          <hr className="mx-5 bg-[#707070]" />
          <BankAccountDetail details={bank.bankAccountDetails} />
          <hr className="mx-5 bg-[#707070]" />
          <JazzCash details={bank.jazzCash} />
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
