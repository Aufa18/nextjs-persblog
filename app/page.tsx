import PostCard from '@/components/PostCard';
import LeftSidebar from '@/components/LeftSidebar';
import RightSidebar from '@/components/RightSidebar';
import { posts } from '@/data/blogData';

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row gap-8 pt-8 pb-16 item-start">
      
      {/* 1. Kiri: Tags (Sticky) */}
      <aside className="hidden md:block w-48 shrink-0 sticky top-24 self-start h-fit">
        <LeftSidebar />
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
            placeholder="Search Keyword..." 
            // Cukup gunakan bg-card dan border-border di sini 👇
            className="w-full p-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-500 text-sm transition-colors duration-300 ease-in-out"
          />
        </div>

        {/* Filter & Judul */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <span>📂</span> All Posts
          </h3>
        </div>

        {/* List Artikel */}
        <div className="space-y-6">
          {posts.map((post, index) => (
            <PostCard key={post.id} post={post} isFeatured={index === 0} />
          ))}
        </div>
      </section>

      {/* 3. Kanan: Profile, Service, Contact (Sticky) */}
      <aside className="hidden lg:flex flex-col w-72 shrink-0 sticky top-24 self-start h-fit space-y-6">
        <RightSidebar />
      </aside>

    </main>
  );
}