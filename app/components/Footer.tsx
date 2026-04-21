import { FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bottom-nav">
            <div className="bottom-nav-links">
                <a href="https://instagram.com/tprkyvz" target="_blank" className="bottom-nav-link">
                    <FaInstagram className="bottom-nav-icon" /> instagram
                </a>
                <a href="https://linkedin.com/in/toprak-yavuz-b15b60247/" target="_blank" className="bottom-nav-link">
                    <FaLinkedin className="bottom-nav-icon" /> linkedin
                </a>
            </div>
        </footer>
    );
}
