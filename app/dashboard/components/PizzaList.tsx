import { useState, useEffect, useMemo } from "react";

type Pizza = {
  id: number;
  name: string;
  price: number;
};

const PizzaList = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("/api/pizzas");
        if (!response.ok) throw new Error("Failed to fetch pizzas");
        const data = await response.json();
        setPizzas(data);
      } catch (err) {
        setError("Error loading pizzas");
      } finally {
        setLoading(false);
      }
    };

    fetchPizzas();
  }, []);

  const sortedPizzas = useMemo(() => {
    return [...pizzas].sort((a, b) => a.name.localeCompare(b.name));
  }, [pizzas]);

  if (loading)
    return <p className="text-gray-500 text-center">Loading pizzas...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Pizza Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedPizzas.map((pizza) => (
          <div key={pizza.id} className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-lg font-semibold">{pizza.name}</h3>
            <p className="text-gray-600">${pizza.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
