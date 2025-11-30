import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'CV - Toprak Yavuz',
    description: 'Kişisel CV ve yetenekler.',
};

export default function CV() {
    return (
        <div className="cv-container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                <h1>Özgeçmiş</h1>
                <a
                    href="/cv.pdf"
                    download
                    style={{
                        backgroundColor: 'var(--primary)',
                        color: '#fff',
                        padding: '10px 20px',
                        borderRadius: '6px',
                        fontWeight: 'bold',
                        textDecoration: 'none'
                    }}
                >
                    PDF İndir
                </a>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '40px' }}>
                {/* Sol Kolon: İletişim & Yetenekler */}
                <aside>
                    <section style={{ marginBottom: '40px' }}>
                        <h3>İletişim</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '10px' }}>📧 toprakyavuz0309@gmail.com</li>
                            <li style={{ marginBottom: '10px' }}>🌍 www.toprakyavuz.com</li>
                        </ul>
                    </section>

                    <section>
                        <h3>Yetenekler</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'CSS', 'Git'].map(skill => (
                                <span key={skill} style={{
                                    backgroundColor: 'var(--border)',
                                    padding: '4px 8px',
                                    borderRadius: '4px',
                                    fontSize: '0.9rem'
                                }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>
                </aside>

                {/* Sağ Kolon: Deneyim & Eğitim */}
                <main>
                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ marginTop: 0, borderBottom: '2px solid var(--border)', paddingBottom: '10px' }}>Deneyim</h2>

                        <div className="experience-item" style={{ marginBottom: '30px' }}>
                            <h3 style={{ marginBottom: '5px' }}>Senior Frontend Developer</h3>
                            <p style={{ color: 'var(--muted)', marginBottom: '10px' }}>Teknoloji A.Ş. | 2022 - Günümüz</p>
                            <p>
                                Modern web uygulamaları geliştirme, React ve Next.js kullanarak performans optimizasyonu sağlama.
                                Ekip liderliği ve kod incelemeleri yapma.
                            </p>
                        </div>

                        <div className="experience-item" style={{ marginBottom: '30px' }}>
                            <h3 style={{ marginBottom: '5px' }}>Frontend Developer</h3>
                            <p style={{ color: 'var(--muted)', marginBottom: '10px' }}>Yazılım Ltd. | 2020 - 2022</p>
                            <p>
                                Kurumsal web siteleri ve e-ticaret platformları geliştirme. Responsive tasarım ve cross-browser uyumluluk çalışmaları.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 style={{ marginTop: 0, borderBottom: '2px solid var(--border)', paddingBottom: '10px' }}>Eğitim</h2>

                        <div className="education-item">
                            <h3 style={{ marginBottom: '5px' }}>Bilgisayar Mühendisliği</h3>
                            <p style={{ color: 'var(--muted)' }}>Ondokuz Mayıs Üniversitesi | 2022 - 2024</p>
                            <p style={{ color: 'var(--muted)' }}>Süleyman Demirel Üniversitesi | 2024 - Devam ediyor</p>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
