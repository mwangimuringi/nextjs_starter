import React from "react";
import { Layout } from "lucide-react";

const stats = [
  { label: "Total Orders", value: 120 },
  { label: "Revenue", value: "$45,000" },
];

const IndexPage = () => {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-bold">Welcome to Dashboard</h1>
        <p className="text-gray-600">
          Manage your orders and products efficiently.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-6">
          {stats.map((stat, index) => (
            <div key={index} className="p-4 bg-white rounded shadow">
              <h2 className="text-lg font-semibold">{stat.label}</h2>
              <p className="text-xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
