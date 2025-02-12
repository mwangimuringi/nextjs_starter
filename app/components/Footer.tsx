import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

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
      <form onSubmit={handleSubscribe} className="mt-4 md:mt-0 flex">
        <input
          type="email"
          placeholder="Subscribe to our newsletter"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 rounded-l-md text-black"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 px-4 py-2 rounded-r-md hover:bg-blue-600"
        >
          Subscribe
        </button>
      </form>
    </footer>
  );
}
