import React, { useState } from "react";
import { Bell, Menu } from "lucide-react";

const DashboardHeader: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center md:flex-row flex-col">
      <div className="flex justify-between items-center w-full md:w-auto">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-gray-800"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
      <div
        className={`mt-4 md:mt-0 flex-col md:flex-row flex items-center space-x-4 ${
          isMenuOpen ? "flex" : "hidden"
        } md:flex`}
      >
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
        />
        <button className="relative p-2 text-gray-600 hover:text-gray-800">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
          >
            Profile
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow rounded border">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                My Account
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Settings
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
