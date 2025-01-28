import React from "react";

interface StatsCardProps {
  title: string;
  value: string;
  description: string;
}

const DashboardStatsCard: React.FC<StatsCardProps> = (props) => {
  const { title, value, description } = props;

  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow">
      <h3 className="text-lg font-semibold text-gray-600">{title}</h3>
      <p className="text-2xl font-bold text-black">{value}</p>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default DashboardStatsCard;
