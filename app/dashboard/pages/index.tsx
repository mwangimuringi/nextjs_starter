import React from "react";
import { Layout } from "lucide-react";

const IndexPage = () => {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-bold">Welcome to Dashboard</h1>
        <p className="text-gray-600">Manage your orders and products efficiently.</p>
      </div>
    </Layout>
  );
};

export default IndexPage;
