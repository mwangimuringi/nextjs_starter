import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 p-6 text-center flex flex-col md:flex-row md:justify-between items-center">
      <p>© {new Date().getFullYear()} CommerceHub. Your trusted marketplace.</p>
      <div className="mt-2 md:mt-0 space-x-4">
        <Link href="/terms" className="hover:text-white">
          Terms
        </Link>
        <Link href="/faq" className="hover:text-white">
          FAQ
        </Link>
        <Link href="/support" className="hover:text-white">
          Support
        </Link>
      </div>
    </footer>
  );
}
