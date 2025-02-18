import { User } from "@clerk/nextjs/server";
import Link from "next/link";
import { useEffect, useState } from "react";

const [user, setUser] = useState<User | null>(null);
useEffect(() => {
  setTimeout(() => {
    setUser({
      id: 1,
      name: "Julius",
      email: "julius@example.com",
      role: "admin",
    });
  }, 1000);
}, []);

console.log(user);

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-semibold">
        <Link href="/">CommerceHub</Link>
        <span className="text-gray-500">by Julius</span>
        <Link href="/login" className="ml-4 text-blue-600">
          Login
        </Link>
        <Link href="/register" className="ml-4 text-blue-600">
          Register
        </Link>
      </div>
      {user ? (
        <div className="flex space-x-6">
          <Link href="/orders" className="hover:text-blue-600">
            Orders
          </Link>
          <Link href="/profile" className="hover:text-blue-600">
            Profile
          </Link>
          <button
            onClick={() => user.signOut()}
            className="hover:text-blue-600"
          >
            Logout
          </button>
        </div>
      ) : (
        <Link href="/login" className="ml-4 text-blue-600">
          Login
        </Link>
      )}
      {/* Mobile menu */}
      <button
        className="md:hidden flex items-center space-x-2 text-gray-500 hover:text-gray-700"
        onClick={() => setOpen(!open)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div className="hidden md:flex space-x-6">
        <Link href="/products" className="hover:text-blue-600">Products</Link>
        <Link href="/cart" className="hover:text-blue-600">Cart</Link>
        <Link href="/dashboard" className="hover:text-blue-600">Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;
