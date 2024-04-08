import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex gap-4">
            <Link href="/home">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/projects">Projects</Link>
        </nav>
    );
}

export default Navbar;
