import './globals.css';
import type { Metadata } from 'next';
import { Merriweather, Roboto } from 'next/font/google';
import { ThemeProvider } from './components/ThemeProvider';
import Header from './components/Header';
import Footer from './components/Footer';

const merriweather = Merriweather({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-serif',
    display: 'swap',
});

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-sans',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'ToprakYavuz',
    description: '',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="tr" className={`${merriweather.variable} ${roboto.variable}`}>
            <body>
                <ThemeProvider>
                    <div className="container">
                        <Header />
                        <main>{children}</main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
