import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-6 text-center flex flex-col md:flex-row md:justify-between items-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} CommerceHub. All rights reserved.
      </p>
      <div className="mt-2 md:mt-0 space-x-4 text-sm">
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
      <div className="mt-2 md:mt-0 flex space-x-3">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook size={20} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter size={20} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram size={20} />
        </a>
      </div>
    </footer>
  );
}
