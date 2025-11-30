import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'İletişim - Toprak Yavuz',
    description: 'Benimle iletişime geçin.',
};

export default function Contact() {
    return (
        <div className="contact-container">
            <h1 style={{ marginBottom: '20px' }}>İletişim</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: 'var(--muted)' }}>
                Projeleriniz, sorularınız veya sadece merhaba demek için bana ulaşabilirsiniz.
            </p>

            <div style={{ display: 'grid', gap: '40px' }}>
                <section>
                    <h2 style={{ marginTop: 0 }}>Bana Ulaşın</h2>
                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem' }}>
                        <li style={{ marginBottom: '15px' }}>
                            <strong>E-posta:</strong> <a href="mailto:toprakyavuz0309@gmail.com">toprakyavuz0309@gmail.com</a>
                        </li>
                        <li style={{ marginBottom: '15px' }}>
                            <strong>Instagram:</strong> <a href="https://instagram.com/tprkyvz" target="_blank" rel="noopener noreferrer">@tprkyvz</a>
                        </li>
                        <li style={{ marginBottom: '15px' }}>
                            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/toprak-yavuz-b15b60247/" target="_blank" rel="noopener noreferrer">Toprak Yavuz</a>
                        </li>
                        <li style={{ marginBottom: '15px' }}>
                            <strong>GitHub:</strong> <a href="https://github.com/tprkyvz" target="_blank" rel="noopener noreferrer">@tprkyvz</a>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2>Mesaj Gönder</h2>
                    <form style={{ display: 'grid', gap: '20px', maxWidth: '500px' }}>
                        <div>
                            <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>İsim</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    borderRadius: '6px',
                                    border: '1px solid var(--border)',
                                    backgroundColor: 'var(--background)',
                                    color: 'var(--foreground)',
                                    fontFamily: 'var(--font-sans)'
                                }}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>E-posta</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    borderRadius: '6px',
                                    border: '1px solid var(--border)',
                                    backgroundColor: 'var(--background)',
                                    color: 'var(--foreground)',
                                    fontFamily: 'var(--font-sans)'
                                }}
                            />
                        </div>
                        <div>
                            <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Mesaj</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    borderRadius: '6px',
                                    border: '1px solid var(--border)',
                                    backgroundColor: 'var(--background)',
                                    color: 'var(--foreground)',
                                    fontFamily: 'var(--font-sans)'
                                }}
                            ></textarea>
                        </div>
                        <button
                            type="button"
                            style={{
                                justifySelf: 'start',
                                backgroundColor: 'var(--primary)',
                                color: '#fff',
                                border: 'none',
                                padding: '12px 24px',
                                borderRadius: '6px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                fontSize: '1rem'
                            }}
                        >
                            Gönder
                        </button>
                    </form>
                </section>
            </div>
        </div>
    );
}
