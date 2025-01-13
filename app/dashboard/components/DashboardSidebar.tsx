import React from "react";

const DashboardSidebar: React.FC = () => {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Analytics</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
