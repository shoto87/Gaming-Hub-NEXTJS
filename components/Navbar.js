import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex justify-around">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/games">Games</Link></li>
                <li><Link href="/community">Community</Link></li>
                <li><Link href="/profile">Profile</Link></li>
            </ul>
        </nav>
    );
}
