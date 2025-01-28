import React, { useState } from "react";
import { Home, BarChart, Settings, Menu, LogOut } from "lucide-react";

const DashboardSidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const links = [
    { name: "Home", icon: <Home className="w-5 h-5" /> },
    { name: "Analytics", icon: <BarChart className="w-5 h-5" /> },
    { name: "Settings", icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <>
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="md:hidden p-2 text-gray-400 hover:text-white"
      >
        <Menu className="w-6 h-6" />
      </button>
      <aside
        className={`${
          isCollapsed ? "w-16" : "w-64"
        } bg-gray-800 text-white p-6 space-y-4 fixed md:relative ${
          isMobileOpen ? "block" : "hidden"
        } md:block`}
      >
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="mb-4 p-2 text-gray-400 hover:text-white"
        >
          <Menu className="w-6 h-6" />
        </button>
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
                  {!isCollapsed && <span className="ml-2">{link.name}</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {!isCollapsed && (
          <footer className="mt-6 border-t border-gray-700 pt-4">
            <a
              href="#"
              className="flex items-center text-sm text-gray-400 hover:text-white"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Logout
            </a>
          </footer>
        )}
      </aside>
    </>
  );
};

export default DashboardSidebar;
