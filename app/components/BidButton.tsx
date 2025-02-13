import { useState } from "react";
import { FaGavel } from "react-icons/fa";

interface BidButtonProps {
  onBid: (amount: number) => Promise<void>;
  bidAmount: number;
}

export default function BidButton({ onBid, bidAmount }: BidButtonProps) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [confirming, setConfirming] = useState(false);

  const handleClick = async () => {
    if (loading) return;
    setConfirming(true);
  };

  const confirmBid = async () => {
    setConfirming(false);
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

      {confirming && (
        <div className="bg-white shadow-md p-4 rounded-md mt-2">
          <p>Are you sure you want to bid ${bidAmount}?</p>
          <div className="flex justify-center mt-2 space-x-2">
            <button
              className="bg-green-500 text-white px-3 py-1 rounded-md"
              onClick={confirmBid}
            >
              Yes
            </button>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded-md"
              onClick={() => setConfirming(false)}
            >
              No
            </button>
          </div>
        </div>
      )}

      {message && <p className="text-sm mt-2 text-green-600">{message}</p>}
    </div>
  );
}
