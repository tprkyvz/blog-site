import Link from 'next/link';
import { FaHome, FaFileAlt, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Header() {
    return (
        <header>
            <div className="title">
                <p className="titleText">Toprak's blog</p>
                <p className="titleSubtext">Siber güvenlik, network ve linux.</p>

                <div className="profileLinks">
                    <Link href="/" className="linkicon" title="Ana Sayfa">
                        <FaHome className="linkiconImage" />
                    </Link>
                    <Link href="/cv" className="linkicon" title="Özgeçmiş">
                        <FaFileAlt className="linkiconImage" />
                    </Link>
                    <Link href="/contact" className="linkicon" title="İletişim">
                        <FaEnvelope className="linkiconImage" />
                    </Link>
                    <a href="https://github.com/tprkyvz" target="_blank" className="linkicon" title="GitHub">
                        <FaGithub className="linkiconImage" />
                    </a>
                    <a href="https://linkedin.com/in/toprak-yavuz-b15b60247/" target="_blank" className="linkicon" title="LinkedIn">
                        <FaLinkedin className="linkiconImage" />
                    </a>
                </div>
            </div>
        </header>
    );
}
