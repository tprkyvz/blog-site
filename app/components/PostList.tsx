'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PostData } from '@/lib/types';

interface Props {
    allPostsData: PostData[];
}

export default function PostList({ allPostsData }: Props) {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    // Tüm benzersiz etiketleri topla
    const allTags = Array.from(new Set(allPostsData.flatMap((post) => post.tags)));

    // Seçili etikete göre filtrele
    const filteredPosts = selectedTag
        ? allPostsData.filter((post) => post.tags.includes(selectedTag))
        : allPostsData;

    return (
        <div>
            {/* Etiket Filtreleme Alanı */}
            <div style={{ marginBottom: '40px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button
                    onClick={() => setSelectedTag(null)}
                    style={{
                        padding: '6px 12px',
                        borderRadius: '20px',
                        border: 'none',
                        cursor: 'pointer',
                        backgroundColor: selectedTag === null ? 'var(--primary)' : 'var(--border)',
                        color: selectedTag === null ? '#fff' : 'var(--foreground)',
                        transition: 'background-color 0.2s',
                    }}
                >
                    Tümü
                </button>
                {allTags.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        style={{
                            padding: '6px 12px',
                            borderRadius: '20px',
                            border: 'none',
                            cursor: 'pointer',
                            backgroundColor: selectedTag === tag ? 'var(--primary)' : 'var(--border)',
                            color: selectedTag === tag ? '#fff' : 'var(--foreground)',
                            transition: 'background-color 0.2s',
                        }}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            {/* Yazı Listesi */}
            <div className="post-list">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map(({ id, date, title, readingTime, tags }) => (
                        <article key={id} style={{ marginBottom: '40px', padding: '20px', border: '1px solid var(--border)', borderRadius: '8px' }}>
                            <Link href={`/blog/${id}`}>
                                <h3 style={{ cursor: 'pointer', marginBottom: '10px' }}>{title}</h3>
                            </Link>
                            <div style={{ display: 'flex', gap: '15px', color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '15px' }}>
                                <span>{date}</span>
                                <span>•</span>
                                <span>{readingTime}</span>
                            </div>
                            <div style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
                                {tags.map((tag: string) => (
                                    <span key={tag} style={{ fontSize: '0.8rem', backgroundColor: 'var(--border)', padding: '2px 8px', borderRadius: '4px' }}>
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                            <Link href={`/blog/${id}`} style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>
                                Devamını Oku →
                            </Link>
                        </article>
                    ))
                ) : (
                    <p>Bu etikete ait yazı bulunamadı.</p>
                )}
            </div>
        </div>
    );
}
