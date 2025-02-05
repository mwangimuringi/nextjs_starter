import Layout from "@/app/layout";

const pizzaCategories = ["Veg", "Non-Veg", "Cheese Burst", "Special"];

const pizzas = [
  { id: 1, name: "Margherita", price: "$8", category: "Veg" },
  { id: 2, name: "Pepperoni", price: "$10", category: "Non-Veg" },
  { id: 3, name: "BBQ Chicken", price: "$12", category: "Special" },
];

const MenuPage = () => {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-bold">Menu</h1>
        <p className="text-gray-600">Browse our delicious pizzas.</p>

        <div className="mt-4">
          <h2 className="text-lg font-semibold">Categories</h2>
          <ul className="flex space-x-4 mt-2">
            {pizzaCategories.map((category) => (
              <li key={category} className="px-4 py-2 bg-gray-200 rounded">
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold">Available Pizzas</h2>
          <ul className="space-y-3">
            {pizzas.map((pizza) => (
              <li
                key={pizza.id}
                className="p-4 border rounded-lg shadow-md flex justify-between"
              >
                <p className="font-medium">
                  {pizza.name} - {pizza.price}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default MenuPage;
