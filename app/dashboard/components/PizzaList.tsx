import { useState, useEffect } from "react";

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

  if (loading) return <p>Loading pizzas...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h2 className="text-xl font-semibold">Pizza Menu</h2>
      <ul>
        {pizzas.map((pizza) => (
          <li key={pizza.id}>
            {pizza.name} - ${pizza.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PizzaList;
