import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default function Home() {
    const allPostsData = getSortedPostsData();

    return (
        <div>
            <section style={{ marginBottom: '60px', textAlign: 'center' }}>
                <h1>Hoş Geldiniz</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--muted)' }}>
                    Modern tasarım, statik yapı ve göz yormayan renkler.
                </p>
            </section>

            <section>
                <h2 style={{ marginBottom: '30px' }}>Son Yazılar</h2>
                <div className="post-list">
                    {allPostsData.map(({ id, date, title }) => (
                        <article key={id} style={{ marginBottom: '40px' }}>
                            <Link href={`/blog/${id}`}>
                                <h3 style={{ cursor: 'pointer' }}>{title}</h3>
                            </Link>
                            <p style={{ color: 'var(--muted)', marginBottom: '10px' }}>{date}</p>
                            <Link href={`/blog/${id}`} style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>
                                Devamını Oku →
                            </Link>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
