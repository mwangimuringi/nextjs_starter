import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center shadow-md">
      <Link href="/" className="text-xl font-bold">
        CommerceHub
      </Link>
      <div className="space-x-4">
        <Link href="/products" className="hover:underline">
          Products
        </Link>
        <Link href="/cart" className="hover:underline">
          Cart
        </Link>
        <Link href="/profile" className="hover:underline">
          Profile
        </Link>
      </div>
    </nav>
  );
}
