import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { TextField } from "@mui/material";

import Otp from "../components/Otp";
import CountrySelectionPopup from "../components/CountrySelectionPopup";

import { chevronDown, close } from "../assets";

import { useDispatch } from "react-redux";
import { setLoginDetails } from "../redux/login/loginSlice";

const STATUS = {
  STARTED: "Started",
  STOPPED: "Stopped",
};

const INITIAL_COUNT = 60;

const Login = () => {
  const dispatch = useDispatch();

  const [selectedCountry, setSelectedCountry] = useState("Pakistan");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(false);
  const [otpOpen, setOtpOpen] = useState(false);
  const [openSelection, setSelectionOpen] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT);
  const [status, setStatus] = useState(STATUS.STOPPED);
  const [otp, setOtp] = useState("");
  const [randomOtp, setRandomOtp] = useState("");
  const generateOtp = () =>
    setRandomOtp(Math.floor(1000 + Math.random() * 9000));

  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;

  const handleStart = () => {
    setStatus(STATUS.STARTED);
  };
  const handleReset = () => {
    setSecondsRemaining(INITIAL_COUNT);
    generateOtp();
    setStatus(STATUS.STARTED);
  };
  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setStatus(STATUS.STOPPED);
      }
    },
    status === STATUS.STARTED ? 1000 : null
  );

  const verifyOtp = () => {
    if (otp.includes(randomOtp)) {
      toast.success("verified");
      handleOtpClose();
      setSecondsRemaining(INITIAL_COUNT);
      setStatus(STATUS.STOPPED);
      setOtp("");
    } else {
      toast.error("Wrong otp");
    }
  };

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

  const login = () => {
    dispatch(setLoginDetails({ selectedCountry, phoneNumber }));
    handleOtpOpen();
    generateOtp();
    handleStart();
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
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                error={error}
                onBlur={() =>
                  phoneNumber === "" ? setError(true) : setError(false)
                }
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
              disabled={phoneNumber === ""}
              onClick={login}
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
        <Otp
          twoDigits={twoDigits}
          verifyOtp={verifyOtp}
          otp={otp}
          setOtp={setOtp}
          randomOtp={randomOtp}
          handleReset={handleReset}
          minutesToDisplay={minutesToDisplay}
          secondsRemaining={secondsRemaining}
          secondsToDisplay={secondsToDisplay}
          handleOtpClose={handleOtpClose}
          otpOpen={otpOpen}
        />
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

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const twoDigits = (num) => String(num).padStart(2, "0");
