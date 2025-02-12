import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 p-6 text-center flex flex-col md:flex-row md:justify-between items-center">
      <p className="text-sm">
        © {new Date().getFullYear()} CommerceHub. Your trusted marketplace.
      </p>
      <div className="mt-2 md:mt-0 space-x-4 text-sm">
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
      <div className="mt-2 md:mt-0 flex space-x-3">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookF size={20} />
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
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={20} />
        </a>
      </div>
    </footer>
  );
}
