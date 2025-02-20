// components/BidButton.tsx
import React, { useState } from "react";

const BidButton: React.FC = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(true);
    alert("Bid placed!");
    setTimeout(() => setIsDisabled(false), 3000);
  };

  return (
    <button
      className={`p-2 rounded ${
        isDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 text-white"
      }`}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {isDisabled ? "Bidding..." : "Bid Now"}
    </button>
  );
};

export default BidButton;
