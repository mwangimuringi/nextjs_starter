import { useState } from "react";

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
      className={`px-4 py-2 rounded-md ${
        loading ? "bg-gray-400" : "bg-blue-500 text-white"
      }`}
      onClick={handleClick}
      disabled={loading}
    >
      {loading ? "Bidding..." : "Place Bid"}
    </button>
  );
}
