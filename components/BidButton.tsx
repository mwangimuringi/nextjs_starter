// components/BidButton.tsx
import React, { useState } from "react";

interface BidButtonProps {
  bidAmount: number;
  onBid: (amount: number) => void;
}

const BidButton: React.FC<BidButtonProps> = ({ bidAmount, onBid }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(true);
    onBid(bidAmount);
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
      {isDisabled ? "Bidding..." : `Bid $${bidAmount}`}
    </button>
  );
};

export default BidButton;
