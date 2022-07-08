import * as React from "react";
import { chevronDown, close } from "../assets";
import { TextField } from "@mui/material";

import Otp from "../components/Otp";
import CountrySelectionPopup from "../components/CountrySelectionPopup";

const Login = () => {
  const [selectedCountry, setSelectedCountry] = React.useState("Pakistan");
  const [otpOpen, setOtpOpen] = React.useState(false);
  const [openSelection, setSelectionOpen] = React.useState(false);

  const handleSelectionOpen = () => {
    setSelectionOpen(true);
  };

  const handleSelectionClose = () => {
    setSelectionOpen(false);
  };

  const handleOtpOpen = () => {
    setOtpOpen(true);
  };

  const handleOtpClose = () => {
    setOtpOpen(false);
  };
  return (
    <div className="p-5 flex flex-col h-screen ">
      <div className="rounded-full border border-[#505050] w-[29px] h-[29px] items-center justify-center flex">
        <img src={close} alt="close" />
      </div>
      <div className="w-full border border-[#bcbcbc] rounded-lg shadow-md my-auto">
        <div className="p-5">
          <div className="flex flex-col">
            <span className="text-base ">One Call</span>
            <span className="text-sm text-center my-2">
              Verify your phone number
            </span>
            <span className="text-xs mb-1">Please login to your account</span>
            <div
              onClick={() => handleSelectionOpen()}
              className="rounded-md w-full p-3 flex justify-between items-center"
              style={{ border: "1px solid #909090" }}
            >
              <div className="flex flex-col gap-1">
                <span className="text-[9px]">Country/Region</span>
                <span className="text-sm">{selectedCountry}</span>
              </div>
              <img src={chevronDown} alt="chevron" className="pr-3" />
            </div>

            <div className="mt-2 w-full">
              <TextField
                type={"tel"}
                className="w-full"
                label="Phone number"
                variant="outlined"
              />
            </div>
            <span className="text-[9px] mt-3 mb-1">
              We will call or text you to confirm your number. Standard message
              and data rates apply.
            </span>
            <button
              onClick={handleOtpOpen}
              className="bg-[#00b0f0] flex items-center justify-center text-white rounded-md p-2"
            >
              <span className="text-sm">Login</span>
            </button>
          </div>
        </div>
        <hr className=" bg-[#707070]" />
        <div className="p-5 text-[9px]">
          By logging in with One Call you agree to One Call{" "}
          <span className="text-[#00b0f0]">terms & conditions</span> and
          <span className="text-[#00b0f0]"> acceptable user policy.</span>
        </div>
        <Otp handleOtpClose={handleOtpClose} otpOpen={otpOpen} />
        <CountrySelectionPopup
          setSelectedCountry={setSelectedCountry}
          openSelection={openSelection}
          handleSelectionClose={handleSelectionClose}
        />
      </div>
    </div>
  );
};

export default Login;
