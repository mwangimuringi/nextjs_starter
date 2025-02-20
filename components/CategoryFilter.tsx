// components/CreateFilter.tsx
import React from "react";

const CreateFilter: React.FC = () => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-gray-100">
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 border rounded-md mb-2"
      />
      <select className="w-full p-2 border rounded-md">
        <option value="">Select Category</option>
        <option value="electronics">Electronics</option>
        <option value="fashion">Fashion</option>
      </select>
    </div>
  );
};

export default CreateFilter;
