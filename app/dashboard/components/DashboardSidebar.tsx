import React, { useState } from "react";

const DashboardSidebar: React.FC = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const links = ["Home", "Analytics", "Settings"];

  return (
    <aside className="w-64 bg-gray-800 text-white p-6 space-y-4">
      <nav>
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link}>
              <a
                href="#"
                className={`block px-4 py-2 rounded ${
                  activeLink === link ? "bg-gray-700" : "hover:bg-gray-700"
                }`}
                onClick={() => setActiveLink(link)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
