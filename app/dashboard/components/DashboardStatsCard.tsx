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
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default DashboardStatsCard;
