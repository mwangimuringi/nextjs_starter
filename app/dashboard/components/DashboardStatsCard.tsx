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
    <div className="p-4 border rounded">
      <h3>{title}</h3>
      <p>{value}</p>
      <p>{description}</p>
    </div>
  );
};

export default DashboardStatsCard;
