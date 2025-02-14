import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
    setEmail("");
  };

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

      <form onSubmit={handleSubscribe} className="mt-4 md:mt-0 flex">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 rounded-l-md text-black"
          required
          aria-label="Email for newsletter subscription"
        />
        <button
          type="submit"
          className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700"
        >
          Subscribe
        </button>
      </form>

      {subscribed && (
        <p className="text-green-400 mt-2">Thank you for subscribing!</p>
      )}
    </footer>
  );
}
