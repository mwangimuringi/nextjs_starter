import { useState } from "react";
import { FaGavel } from "react-icons/fa";

interface BidButtonProps {
  onBid: (amount: number) => Promise<void>;
  bidAmount: number;
}

export default function BidButton({ onBid, bidAmount }: BidButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (loading) return;
    setLoading(true);
    await onBid(bidAmount);
    setLoading(false);
  };

  return (
    <button
      className={`flex items-center justify-center px-4 py-2 rounded-md transition-all ${
        loading ? "bg-gray-400" : "bg-blue-500 text-white hover:bg-blue-600"
      }`}
      onClick={handleClick}
      disabled={loading}
      aria-label="Place a bid"
    >
      <FaGavel className="mr-2" />
      {loading ? "Bidding..." : `Bid $${bidAmount}`}
    </button>
  );
}
