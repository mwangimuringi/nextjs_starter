import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center shadow-md">
      <Link href="/" className="text-xl font-bold">
        CommerceHub
      </Link>
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <div className={`md:flex space-x-4 ${menuOpen ? "block" : "hidden"}`}>
        <Link
          href="/products"
          className={pathname === "/products" ? "underline" : ""}
        >
          Products
        </Link>
        <Link href="/cart" className={pathname === "/cart" ? "underline" : ""}>
          Cart
        </Link>
        <Link
          href="/profile"
          className={pathname === "/profile" ? "underline" : ""}
        >
          Profile
        </Link>
      </div>
    </nav>
  );
}
