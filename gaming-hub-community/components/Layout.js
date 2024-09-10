import Navbar from './Navbar';

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className="container mx-auto mt-8">{children}</main>
        </>
    );
}
