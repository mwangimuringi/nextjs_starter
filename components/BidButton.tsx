// components/BidButton.tsx
import React, { useState } from "react";

interface BidButtonProps {
  bidAmount: number;
  onBid: (amount: number) => void;
}

const BidButton: React.FC<BidButtonProps> = ({ bidAmount, onBid }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setIsDisabled(true);
    setLoading(true);
    onBid(bidAmount);
    setTimeout(() => {
      setIsDisabled(false);
      setLoading(false);
    }, 3000);
  };

  return (
    <button
      className={`p-2 rounded ${
        isDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 text-white"
      }`}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {loading ? "Processing..." : `Bid $${bidAmount}`}
    </button>
  );
};

export default BidButton;
