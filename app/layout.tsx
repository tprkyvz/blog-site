import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Modern Blog',
    description: 'Göz yormayan, modern statik blog.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="tr">
            <body>
                <div className="container">
                    <header>
                        <nav>
                            <a href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--foreground)' }}>
                                Modern Blog
                            </a>
                        </nav>
                    </header>
                    <main>{children}</main>
                    <footer>
                        <p>&copy; {new Date().getFullYear()} Modern Blog. Tüm hakları saklıdır.</p>
                    </footer>
                </div>
            </body>
        </html>
    );
}
