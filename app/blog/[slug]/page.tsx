import { getAllPostIds, getPostData } from '@/lib/posts';
import { Metadata } from 'next';

interface Props {
    params: {
        slug: string;
    };
}

// Statik parametreleri oluştur (Cloudflare için gerekli)
export async function generateStaticParams() {
    const paths = getAllPostIds();
    return paths.map((path) => ({
        slug: path.params.slug,
    }));
}

// Metadata oluştur
export async function generateMetadata({ params }: any): Promise<Metadata> {
    // params'ı await etmemiz gerekebilir Next.js 15'te, ama şimdilik direkt erişim deneyelim
    // Next.js 15'te params bir Promise olabilir.
    const { slug } = await params;
    const postData = await getPostData(slug);
    return {
        title: postData.title,
    };
}

export default async function Post({ params }: any) {
    const { slug } = await params;
    const postData = await getPostData(slug);

    return (
        <article>
            <h1>{postData.title}</h1>
            <span className="date">{postData.date}</span>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }} />
        </article>
    );
}
