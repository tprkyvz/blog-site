import Link from 'next/link';

export default function Header() {
    return (
        <header className="top-nav">
            <nav className="top-nav-links">
                <Link href="/" className="top-nav-link">home</Link>
                <Link href="/blog" className="top-nav-link">blog</Link>
                <a href="https://github.com/tprkyvz" target="_blank" className="top-nav-link">github</a>
                <Link href="/cv" className="top-nav-link">resume</Link>
                <Link href="/contact" className="top-nav-link">contact</Link>
            </nav>
        </header>
    );
}
