import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";

import OtpInput from "react-otp-input";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Otp = ({
  otpOpen,
  handleOtpClose,
  verifyOtp,
  twoDigits,
  handleReset,
  otp,
  setOtp,
  minutesToDisplay,
  secondsRemaining,
  secondsToDisplay,
  randomOtp,
}) => {
  return (
    <Dialog
      open={otpOpen}
      fullScreen
      TransitionComponent={Transition}
      keepMounted
      onClose={handleOtpClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent>
        <div className="w-full h-full border border-[#bcbcbc] rounded-lg shadow-md ">
          <div className="p-5 flex justify-center">
            <span className="text-center">OTP Verification</span>
          </div>
          <hr className=" bg-[#707070]" />
          <div className="p-5 flex flex-col justify-center items-center gap-12">
            <span className="text-sm text-[#3e3e3e]">
              Enter the 4-digit code which has been sent to your Mobile Number:
              92 30675555
            </span>

            {/* Remove when in production */}
            <span className="text-red-600">
              *OTP FOR DEVELOPMENT:
              {randomOtp}*
            </span>
            <OtpInput
              inputStyle={{ borderBottom: "2px solid ", width: "53px" }}
              value={otp}
              onChange={setOtp}
              numInputs={4}
              separator={<span className="text-transparent">-----</span>}
            />
            <button
              onClick={() => verifyOtp()}
              className="bg-[#00b0f0] flex items-center text-sm justify-center text-white rounded-md p-2 w-full"
            >
              Verify
            </button>
            <span className="text-xs text-[#a7a6a6] ">
              Didn't receive OTP?{" "}
              <span className="text-[#3e3e3e]">
                Resend OTP in {twoDigits(minutesToDisplay)}:
                {twoDigits(secondsToDisplay)}
              </span>
            </span>
            <button
              disabled={secondsRemaining !== 0}
              className={`text-xs ${
                secondsRemaining !== 0 ? "text-gray-500" : "text-[#00b0f0]"
              }`}
              onClick={() => handleReset()}
            >
              Resend OTP
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Otp;
