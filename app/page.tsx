'use client';

import { useState } from 'react';
import PostCard from '@/components/PostCard';
import LeftSidebar from '@/components/LeftSidebar';
import RightSidebar from '@/components/RightSidebar';
import { posts } from '@/data/blogData';
// Pastikan Anda mengimpor ikon dari react-icons (atau lucide-react jika Anda pakai itu)
import { FiChevronDown } from 'react-icons/fi';

export default function Home() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // 1. State baru untuk Kategori
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  // 2. Ekstrak daftar kategori unik dari data posts (Otomatis)
  const categories = Array.from(new Set(posts.map((post) => post.category)));

  const normalizedQuery = searchQuery.trim().toLowerCase();

  // 3. Logika Filter Diperbarui (Mencakup Tag, Search, DAN Kategori)
  const filteredPosts = posts.filter((post) => {
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    const searchableText = [
      post.title,
      post.summary ?? '',
      post.category,
      ...post.tags,
    ]
      .join(' ')
      .toLowerCase();

    const matchesSearch = !normalizedQuery || searchableText.includes(normalizedQuery);

    // Harus lolos ketiga filter ini
    return matchesTag && matchesSearch && matchesCategory;
  });

  return (
    <main className="flex flex-col md:flex-row gap-8 pt-8 pb-16 item-start">
      {/* 1. Kiri: Tags (Sticky) */}
      <aside className="hidden md:block w-48 shrink-0 sticky top-24 self-start h-fit">
        <LeftSidebar selectedTag={selectedTag} onSelectTag={setSelectedTag} />
      </aside>

      {/* 2. Tengah: Search & Posts */}
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
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4 relative">
          
          {/* Dropdown Kategori (Relative Container) */}
          <div className="relative">
            <button
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="font-bold text-lg flex items-center gap-2 hover:opacity-80 transition-opacity focus:outline-none group"
            >
              {searchQuery
                ? `Search results for "${searchQuery}"`
                : selectedCategory || '📂 All Posts'}
                
              {/* Ikon Panah (disembunyikan saat sedang mencari sesuatu) */}
              {!searchQuery && (
                <FiChevronDown 
                  className={`w-5 h-5 transition-transform duration-300 ${isCategoryOpen ? 'rotate-180' : ''}`} 
                />
              )}
            </button>

            {/* Menu List Kategori (Absolute Popup) */}
            {isCategoryOpen && !searchQuery && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-xl shadow-lg z-20 p-2 flex flex-col gap-1">
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setIsCategoryOpen(false);
                  }}
                  className={`text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                    selectedCategory === null ? 'bg-foreground/10 text-foreground font-medium' : 'text-foreground/70 hover:bg-foreground/5'
                  }`}
                >
                  All Posts
                </button>
                
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setIsCategoryOpen(false);
                    }}
                    className={`text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                      selectedCategory === cat ? 'bg-foreground/10 text-foreground font-medium' : 'text-foreground/70 hover:bg-foreground/5'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            {(searchQuery || selectedCategory) && (
              <p className="text-sm text-foreground/60">
                Showing {filteredPosts.length} post{filteredPosts.length === 1 ? '' : 's'}.
              </p>
            )}

            {/* Tombol Clear Filters Diperbarui */}
            {(searchQuery || selectedCategory) && (
              <button
                type="button"
                onClick={() => {
                  setSelectedTag(null);
                  setSelectedCategory(null);
                  setSearchQuery('');
                  setIsCategoryOpen(false);
                }}
                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                Clear filters
              </button>
            )}
          </div>
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