// components/CreateFilter.tsx
import React from "react";

const CreateFilter: React.FC = () => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-gray-100">
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 border rounded-md"
      />
    </div>
  );
};

export default CreateFilter;
