import { useState } from "react";
import { FaGavel } from "react-icons/fa";

interface BidButtonProps {
  onBid: () => Promise<void>;
}

export default function BidButton({ onBid }: BidButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (loading) return;
    setLoading(true);
    await onBid();
    setLoading(false);
  };

  return (
    <button
      className={`flex items-center justify-center px-4 py-2 rounded-md ${
        loading ? "bg-gray-400" : "bg-blue-500 text-white"
      }`}
      onClick={handleClick}
      disabled={loading}
      aria-label="Place a bid"
    >
      <FaGavel className="mr-2" />
      {loading ? "Bidding..." : "Place Bid"}
    </button>
  );
}
