import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-white">
      <Link href="/" className="text-2xl font-semibold">
        Commerce Hub
      </Link>
      <div className="flex items-center space-x-4">
        <Link href="/orders" className="text-gray-600 hover:text-gray-800">
          Orders
        </Link>
        <Link href="/products" className="text-gray-600 hover:text-gray-800">
          Products
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;