import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-6 text-center flex flex-col md:flex-row md:justify-between items-center">
      <p>&copy; {new Date().getFullYear()} CommerceHub. All rights reserved.</p>
      <div className="mt-2 md:mt-0 space-x-4">
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
        <Link href="/privacy" className="hover:underline">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
