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
      className={`p-3 w-full rounded-lg text-lg font-semibold transition-all ${
        isDisabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-gradient-to-r from-blue-500 to-indigo-500 hover:scale-105 text-white shadow-lg"
      }`}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {loading ? (
        <span className="animate-pulse">Processing...</span>
      ) : (
        `Bid $${bidAmount}`
      )}
    </button>
  );
};

export default BidButton;
