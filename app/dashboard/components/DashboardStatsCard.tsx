import React from "react";

type StatsCardProps = {
  title: string;
  value: string;
  description: string;
};

const DashboardStatsCard = ({
  title,
  value,
  description,
}: StatsCardProps): JSX.Element => {
  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
      <h3 className="text-lg font-medium text-indigo-700">{title}</h3>
      <p className="text-2xl font-extrabold text-black">{value}</p>
      <p className="text-sm text-gray-500 italic">{description}</p>
    </div>
  );
};

export default DashboardStatsCard;
