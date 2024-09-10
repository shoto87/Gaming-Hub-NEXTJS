import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { FaGamepad, FaUsers, FaUser, FaHome } from 'react-icons/fa';

export default function Navbar() {
    const { data: session } = useSession();

    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex justify-around text-white items-center">
                <li>
                    <Link href="/" className="flex items-center">
                        <FaHome className="mr-2" />
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/games" className="flex items-center">
                        <FaGamepad className="mr-2" />
                        Games
                    </Link>
                </li>
                <li>
                    <Link href="/community" className="flex items-center">
                        <FaUsers className="mr-2" />
                        Community
                    </Link>
                </li>
                {session ? (
                    <>
                        <li>
                            <Link href="/profile" className="flex items-center">
                                <FaUser className="mr-2" />
                                Profile
                            </Link>
                        </li>
                        <li>
                            <button 
                                onClick={() => signOut()} 
                                className="bg-red-600 px-4 py-2 rounded"
                            >
                                Logout
                            </button>
                        </li>
                    </>
                ) : (
                    <li>
                        <Link href="/auth/signin" className="flex items-center">
                            <FaUser className="mr-2" />
                            Login
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}
