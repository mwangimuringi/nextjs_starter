import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 md:flex md:justify-between md:px-8">
      <p className="text-sm md:text-base">
        © 2025 CommerceHub. All rights reserved.
      </p>
      <div className="mt-2 space-x-4 text-sm md:mt-0">
        <Link href="/about" className="hover:text-gray-400">
          About
        </Link>
        <Link href="/contact" className="hover:text-gray-400">
          Contact
        </Link>
        <Link href="/privacy" className="hover:text-gray-400">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
