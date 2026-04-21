import { getSortedPostsData } from '@/lib/posts';
import PostList from '../components/PostList';

export default function BlogPage() {
    const allPostsData = getSortedPostsData();

    return (
        <div>
            <h1 className="hero-title" style={{ textAlign: 'center', marginTop: '2rem' }}>Yazılar</h1>
            <PostList allPostsData={allPostsData} />
        </div>
    );
}
