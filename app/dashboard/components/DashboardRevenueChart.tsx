import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DashboardRevenueChart: React.FC = () => {
  const [data, setData] = useState([
    { name: 'Jan', revenue: 4000 },
    { name: 'Feb', revenue: 3000 },
    { name: 'Mar', revenue: 2000 },
    { name: 'Apr', revenue: 2780 },
    { name: 'May', revenue: 1890 },
    { name: 'Jun', revenue: 2390 },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const newData = [
        { name: 'Jul', revenue: 3490 },
        { name: 'Aug', revenue: 4100 },
        { name: 'Sep', revenue: 3950 },
      ];
      setData(prevData => [...prevData, ...newData]);
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800">Revenue Overview</h2>
      <div className="mt-4">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#4A90E2" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardRevenueChart;
