'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';

export default function Header() {
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <nav style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--foreground)', marginRight: '20px' }}>
                    Toprak Yavuz
                </Link>
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
            <button
                onClick={toggleTheme}
                style={{
                    background: 'none',
                    border: '1px solid var(--border)',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    color: 'var(--foreground)',
                    fontSize: '0.9rem',
                    minWidth: '100px', // Buton genişliği sabit kalsın
                }}
            >
                {mounted ? (theme === 'light' ? '🌙 Koyu Mod' : '☀️ Açık Mod') : '...'}
            </button>
        </header>
    );
}
