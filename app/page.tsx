import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import PostList from './components/PostList';

export default function Home() {
    const allPostsData = getSortedPostsData();

    return (
        <div>
            <section style={{ marginBottom: '60px', textAlign: 'center' }}>
                <h1>Selam ben Toprak</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--muted)' }}>
                    Bilgisayar Mühendisliği öğrencisi.
                </p>
            </section>

            <section>
                <h2 style={{ marginBottom: '30px' }}>Son Yazılar</h2>
                <PostList allPostsData={allPostsData} />
            </section>
        </div>
    );
}
