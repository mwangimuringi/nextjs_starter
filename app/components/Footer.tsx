import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} CommerceHub. All rights reserved.</p>
      <div className="mt-2">
        <Link href="/about" className="mx-2 hover:underline">
          About
        </Link>
        <Link href="/contact" className="mx-2 hover:underline">
          Contact
        </Link>
        <Link href="/privacy" className="mx-2 hover:underline">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
