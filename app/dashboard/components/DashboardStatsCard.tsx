import React from "react";

type StatsCardProps = {
  title: string;
  value: string;
  description: string;
};

const DashboardStatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  description,
}) => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-sm">
      <h3 className="text-base font-medium text-blue-600">{title}</h3>
      <p className="text-3xl font-bold text-gray-800">{value}</p>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
};

export default DashboardStatsCard;
