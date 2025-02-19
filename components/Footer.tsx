import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white text-center py-6 md:flex md:justify-between md:items-center md:px-10">
      <p className="text-sm md:text-base">
        © {currentYear} CommerceHub. All rights reserved.
      </p>
      <div className="mt-2 space-x-6 text-sm md:mt-0 flex justify-center">
        <Link href="/about" className="hover:text-gray-400 transition">
          About
        </Link>
        <Link href="/contact" className="hover:text-gray-400 transition">
          Contact
        </Link>
        <Link href="/privacy" className="hover:text-gray-400 transition">
          Privacy Policy
        </Link>
      </div>
      <div className="flex justify-center mt-2 md:mt-0 space-x-6">
        <a href="#" className="hover:text-gray-400 transition">
          <FaFacebook />
        </a>
        <a href="#" className="hover:text-gray-400 transition">
          <FaTwitter />
        </a>
        <a href="#" className="hover:text-gray-400 transition">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
