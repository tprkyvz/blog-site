'use client';

import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
                <a
                    href="https://github.com/tprkyvz"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '1.5rem', color: 'var(--foreground)' }}
                    className="social-link"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/toprak-yavuz-b15b60247/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '1.5rem', color: 'var(--foreground)' }}
                    className="social-link"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://instagram.com/tprkyvz"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '1.5rem', color: 'var(--foreground)' }}
                    className="social-link"
                >
                    <FaInstagram />
                </a>
            </div>
            <p>&copy; {new Date().getFullYear()} Toprak Yavuz. Tüm hakları saklıdır.</p>
        </footer>
    );
}
