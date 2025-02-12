import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-blue-500 p-4 text-white flex justify-between">
            <Link href="/">Home</Link>
        </nav>
    );
}
