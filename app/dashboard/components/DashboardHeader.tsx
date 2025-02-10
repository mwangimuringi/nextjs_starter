import React, { useState } from "react";
import { Bell, Menu, Moon, Sun } from "lucide-react";

const DashboardHeader: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [_isMenuOpen, _setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <header
      className={`p-4 shadow flex justify-between items-center ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="flex items-center space-x-4">
        <button
          onClick={() => _setIsMenuOpen(!_isMenuOpen)}
          className="p-2 text-gray-600 hover:text-gray-800"
        >
          <Menu className="w-5 h-5" />
        </button>
        <a href="#" className="text-xl font-bold">
          Commerce Hub
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <div className="text-xl font-bold">🌟</div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 text-gray-600 hover:text-gray-800"
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
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
