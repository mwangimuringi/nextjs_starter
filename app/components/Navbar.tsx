import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between">
      <Link href="/" className="text-xl font-bold">
        CommerceHub
      </Link>
      <div>
        <Link href="/products" className="mx-2">
          Products
        </Link>
        <Link href="/cart" className="mx-2">
          Cart
        </Link>
        <Link href="/profile" className="mx-2">
          Profile
        </Link>
      </div>
    </nav>
  );
}
