import Image from "next/image";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const ProductCard = ({ id, name, price, imageUrl }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <Image
        src={imageUrl}
        alt={name}
        width={400}
        height={400}
        className="object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-sm">${price}</p>
        <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};