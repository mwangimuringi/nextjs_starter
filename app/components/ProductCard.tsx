interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>
    </div>
  );
}
