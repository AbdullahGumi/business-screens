import React, { useState } from "react";
import toast from "react-hot-toast";
const BillingUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="flex flex-col px-10 gap-14">
      <span className="text-sm">Please Upload the Image of your receipt:</span>
      <input type="file" onChange={onFileChange} />
      <button
        disabled={!selectedFile}
        className="rounded-sm  bg-[#eee] w-[87px] p-1"
        onClick={() => toast.success("Submitted")}
      >
        Submit
      </button>
    </div>
  );
};

export default BillingUpload;
