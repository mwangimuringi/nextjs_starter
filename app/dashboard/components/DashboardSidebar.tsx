import React from "react";

const DashboardSidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-6 space-y-4">
      <nav>
        <ul className="space-y-2">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">
              Analytics
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
