import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-semibold">
        <Link href="/">CommerceHub</Link>
      </div>
      <div className="hidden md:flex space-x-6">
        <Link href="/products" className="hover:text-blue-600">Products</Link>
        <Link href="/cart" className="hover:text-blue-600">Cart</Link>
        <Link href="/dashboard" className="hover:text-blue-600">Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;
