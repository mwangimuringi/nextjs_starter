import { SetStateAction, useState } from "react";

const BidPage = () => {
  const [bidAmount, setBidAmount] = useState("");

  const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setBidAmount(e.target.value);
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Place Your Bid</h2>
      <form className="flex flex-col gap-4">
        <input
          type="number"
          value={bidAmount}
          onChange={handleChange}
          placeholder="Enter bid amount"
          className="border p-2 rounded-md w-full"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Submit Bid
        </button>
      </form>
    </div>
  );
};

export default BidPage;
