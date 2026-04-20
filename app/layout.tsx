import './globals.css';
import type { Metadata } from 'next';
import { JetBrains_Mono, Noto_Sans } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-mono',
    display: 'swap',
});

const notoSans = Noto_Sans({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-sans',
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Toprak's blog",
    description: '',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="tr" className={`${jetbrainsMono.variable} ${notoSans.variable}`}>
            <body>
                <div className="container">
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
