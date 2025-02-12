import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-300 p-4 text-center">
            <p>© {new Date().getFullYear()} CommerceHub. Your trusted marketplace.</p>
            <div className="mt-2">
                <Link href="/terms" className="mx-2 hover:text-white">Terms of Service</Link>
                <Link href="/faq" className="mx-2 hover:text-white">FAQ</Link>
                <Link href="/support" className="mx-2 hover:text-white">Support</Link>
            </div>
        </footer>
    );
}
