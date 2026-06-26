import Link from 'next/link';

interface PostProps {
  post: any;
  isFeatured?: boolean; 
}

export default function PostCard({ post, isFeatured }: PostProps) {
  return (
    <Link href={post.link} className="block group">
      <div className="p-5 bg-card border border-border rounded-2xl hover:shadow-lg transition-all">

        <h3 className="text-xl font-bold text-foreground mb-4 transition-colors">
          {post.title}
        </h3>

        {post.summary && (
          <p className="text-sm text-foreground/70 mb-4">{post.summary}</p>
        )}

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