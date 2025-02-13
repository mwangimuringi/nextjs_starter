interface BidButtonProps {
  onBid: () => void;
}

export default function BidButton({ onBid }: BidButtonProps) {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-md"
      onClick={onBid}
    >
      Place Bid
    </button>
  );
}
