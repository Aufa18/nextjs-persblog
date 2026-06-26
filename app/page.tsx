'use client';

import { useState } from 'react';
import PostCard from '@/components/PostCard';
import LeftSidebar from '@/components/LeftSidebar';
import RightSidebar from '@/components/RightSidebar';
import { posts } from '@/data/blogData';

export default function Home() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredPosts = posts.filter((post) => {
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    const searchableText = [
      post.title,
      post.summary ?? '',
      post.category,
      ...post.tags,
    ]
      .join(' ')
      .toLowerCase();

    const matchesSearch = !normalizedQuery || searchableText.includes(normalizedQuery);

    return matchesTag && matchesSearch;
  });

  return (
    <main className="flex flex-col md:flex-row gap-8 pt-8 pb-16 item-start">
      {/* 1. Kiri: Tags (Sticky) */}
      <aside className="hidden md:block w-48 shrink-0 sticky top-24 self-start h-fit">
        <LeftSidebar selectedTag={selectedTag} onSelectTag={setSelectedTag} />
      </aside>

      {/* 2. Tengah: Search & Posts (Bisa di-scroll karena tidak sticky) */}
      <section className="flex-1 min-w-0">
        {/* Search Bar */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2 flex items-center gap-2 text-foreground/80">
            <span>🔎</span> Search
          </h3>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Keyword..."
            className="w-full p-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-500 text-sm transition-colors duration-300 ease-in-out"
          />
        </div>

        {/* Filter & Judul */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
          <div>
            <h3 className="font-bold text-lg flex items-center gap-2">
              <span>📂</span>{' '}
              {selectedTag
                ? `Posts tagged "${selectedTag}"`
                : searchQuery
                  ? `Search results for "${searchQuery}"`
                  : 'All Posts'}
            </h3>
            {(selectedTag || searchQuery) && (
              <p className="text-sm text-foreground/60 mt-1">
                Showing {filteredPosts.length} post{filteredPosts.length === 1 ? '' : 's'}.
              </p>
            )}
          </div>

          {(selectedTag || searchQuery) && (
            <button
              type="button"
              onClick={() => {
                setSelectedTag(null);
                setSearchQuery('');
              }}
              className="text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* List Artikel */}
        {filteredPosts.length > 0 ? (
          <div className="space-y-6">
            {filteredPosts.map((post, index) => (
              <PostCard key={post.id} post={post} isFeatured={index === 0} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-border p-8 text-center text-foreground/70">
            No posts found for this search.
          </div>
        )}
      </section>

      {/* 3. Kanan: Profile, Service, Contact (Sticky) */}
      <aside className="hidden lg:flex flex-col w-72 shrink-0 sticky top-24 self-start h-fit space-y-6">
        <RightSidebar />
      </aside>
    </main>
  );
}