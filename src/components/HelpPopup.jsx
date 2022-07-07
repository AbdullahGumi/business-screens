import { Popover } from "@mui/material";
import React, { useState } from "react";
import { help } from "../assets";

const HelpPopup = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <div className="ml-auto">
      <img
        onClick={handlePopoverOpen}
        alt="camera"
        src={help}
        style={{ width: "28px", height: "28px" }}
        className="hover:cursor-pointer  "
      />
      <Popover
        id="mouse-over-popover"
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <span className="">Some info</span>
      </Popover>
    </div>
  );
};

export default HelpPopup;
