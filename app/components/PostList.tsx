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
            <div className="announcements-container" style={{ marginBottom: "2rem" }}>
                <div className="announcement">
                    <button
                        onClick={() => setSelectedTag(null)}
                        className={`tag-button ${selectedTag === null ? 'active' : ''}`}
                    >
                        Tümü
                    </button>
                    {allTags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setSelectedTag(tag)}
                            className={`tag-button ${selectedTag === tag ? 'active' : ''}`}
                        >
                            #{tag}
                        </button>
                    ))}
                </div>
            </div>

            {/* Yazı Listesi */}
            <div className="articleFlex">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map(({ id, date, title, readingTime, tags }, index) => {
                        const isLeft = index % 2 === 0;
                        return (
                            <div className="articleTitleAndViews" key={id}>
                                <Link 
                                    href={`/blog/${id}`} 
                                    className={`articleA ${isLeft ? 'articleALeft' : 'articleARight'}`}
                                >
                                    <div className={`articleContainer ${isLeft ? 'articleContainerRight' : 'articleContainerLeft'}`}>
                                        <h4 className="articleTitle">{title}</h4>
                                        <div className="articleViews">
                                            <p className="articleViewsText">{readingTime}</p>
                                        </div>
                                        <hr className="articleHr" />
                                        <p className="articleText">
                                            {tags.map((tag: string) => `#${tag}`).join(" ")}
                                        </p>
                                        <br/>
                                        <p className="articleDate">{date}</p>
                                    </div>
                                </Link>
                            </div>
                        );
                    })
                ) : (
                    <p style={{ textAlign: 'center', color: '#d9d9d9', fontFamily: 'var(--font-mono)' }}>Bu etikete ait yazı bulunamadı.</p>
                )}
            </div>
        </div>
    );
}
