import { useState } from "react";
import { FaGavel } from "react-icons/fa";

interface BidButtonProps {
  onBid: (amount: number) => Promise<void>;
  bidAmount: number;
}

export default function BidButton({ onBid, bidAmount }: BidButtonProps) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleClick = async () => {
    if (loading) return;
    setLoading(true);
    try {
      await onBid(bidAmount);
      setMessage("Bid placed successfully!");
    } catch (error) {
      setMessage("Bid failed. Try again.");
    }
    setLoading(false);
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="flex flex-col items-center">
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
      {message && <p className="text-sm mt-2 text-green-600">{message}</p>}
    </div>
  );
}
