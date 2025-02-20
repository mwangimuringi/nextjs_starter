// components/BidButton.tsx
import React from "react";

const BidButton: React.FC = () => {
  const handleClick = () => {
    alert("Bid placed!");
  };

  return (
    <button className="p-2 bg-blue-500 text-white rounded" onClick={handleClick}>
      Bid Now
    </button>
  );
};

export default BidButton;
