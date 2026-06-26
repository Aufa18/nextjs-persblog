import Link from 'next/link';

interface PostProps {
  post: any;
  isFeatured?: boolean; // Untuk card pertama yang besar
}

export default function PostCard({ post, isFeatured }: PostProps) {
  return (
    <Link href={post.link} className="block group">
      <div className="p-5 bg-card border border-border rounded-2xl hover:shadow-lg transition-all">
        {/* Gambar besar jika artikel pertama (Featured) */}
        {isFeatured && (
          <div className="w-full h-64 bg-linear-to-r from-blue-200 to-purple-300 dark:from-purple-900 dark:to-indigo-900 rounded-xl mb-4 flex items-center justify-center">
            <h1 className="text-3xl font-bold text-black dark:text-white">
              Aufa Wicaksono
            </h1>
          </div>
        )}

        <h3 className="text-xl font-bold text-foreground mb-2 transition-colors">
          {post.title}
        </h3>

        {post.summary && (
          <p className="text-sm text-foreground/70 mb-4">{post.summary}</p>
        )}

        {/* Footer Card */}
        {/* 1. flex-col : Memaksa elemen menyusun dari atas ke bawah (Mobile)
  2. items-start : Memastikan tanggal rata kiri saat di bawah (Mobile)
  3. sm:flex-row : Mengubah jadi kiri-kanan pada layar Tablet/Laptop
  4. sm:items-center : Menyelaraskan tinggi secara vertikal di Laptop
*/}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-foreground/60">
          {/* Bagian Kategori & Tags (Selalu di atas saat Mobile, di kiri saat Laptop) */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2 py-1 bg-foreground/5 rounded-md whitespace-nowrap">
              {post.category}
            </span>

            <div className="flex flex-wrap gap-1">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-foreground/5 rounded-md text-foreground/60 whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bagian Tanggal (Selalu di bawah saat Mobile, di kanan saat Laptop) */}
          <span className="whitespace-nowrap shrink-0">{post.date}</span>
        </div>
      </div>
    </Link>
  );
}