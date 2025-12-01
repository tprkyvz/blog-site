'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';

export default function Header() {
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <header className="header-container">
            <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--foreground)', zIndex: 51 }}>
                Toprak Yavuz
            </Link>

            {/* Desktop Navigation */}
            <nav className="nav-desktop">
                <Link href="/" className="nav-link">
                    Ana Sayfa
                </Link>
                <Link href="/cv" className="nav-link">
                    Özgeçmiş
                </Link>
                <Link href="/contact" className="nav-link">
                    İletişim
                </Link>
            </nav>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button
                    onClick={toggleTheme}
                    className="theme-toggle-btn"
                    aria-label="Toggle Theme"
                >
                    {mounted ? (theme === 'light' ? '🌙' : '☀️') : '...'}
                </button>

                {/* Mobile Menu Toggle */}
                <button className="nav-mobile-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
                    {isMenuOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <Link href="/" className="nav-link" onClick={closeMenu}>
                    Ana Sayfa
                </Link>
                <Link href="/cv" className="nav-link" onClick={closeMenu}>
                    Özgeçmiş
                </Link>
                <Link href="/contact" className="nav-link" onClick={closeMenu}>
                    İletişim
                </Link>
            </div>
        </header>
    );
}
