import React, { useState } from "react";
import { Home, BarChart, Settings } from "lucide-react";

const DashboardSidebar: React.FC = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const links = [
    { name: "Home", icon: <Home className="w-5 h-5" /> },
    { name: "Analytics", icon: <BarChart className="w-5 h-5" /> },
    { name: "Settings", icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <aside className="w-64 bg-gray-800 text-white p-6 space-y-4">
      <nav>
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href="#"
                className={`flex items-center px-4 py-2 rounded ${
                  activeLink === link.name ? "bg-gray-700" : "hover:bg-gray-700"
                }`}
                onClick={() => setActiveLink(link.name)}
              >
                {link.icon}
                <span className="ml-2">{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
