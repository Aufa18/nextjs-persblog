import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// 1. Fungsi untuk mencari file MDX berdasarkan slug/URL
async function getPost(slug: string) {
  try {
    const filePath = path.join(process.cwd(), 'content', `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // gray-matter memisahkan data frontmatter (data) dan isi tulisan (content)
    const { data, content } = matter(fileContent);
    
    return { meta: data, content };
  } catch (error) {
    return null; // Mengembalikan null jika file .mdx tidak ditemukan
  }
}

// 2. Fungsi Next.js untuk generate halaman statis saat build time (Sangat Bagus untuk SEO)
export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'content');
  
  if (!fs.existsSync(contentDir)) return [];
  
  const files = fs.readdirSync(contentDir);
  
  // Mengambil nama file untuk dijadikan slug (contoh: 'docs.mdx' menjadi 'docs')
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => ({
      slug: file.replace('.mdx', ''),
    }));
}

// 3. Komponen Utama Halaman Detail Artikel
export default async function PostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = await getPost(resolvedParams.slug);

  // Jika file MDX tidak ada, otomatis lempar ke halaman 404
  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto pt-10 pb-20 px-4">
      {/* Tombol Kembali */}
      <Link 
        href="/" 
        className="text-sm text-foreground/50 hover:text-foreground mb-8 inline-block transition-colors"
      >
        ← Back to feed
      </Link>

      {/* Header Artikel */}
      <header className="mb-10 border-b border-border pb-8">
        <div className="flex items-center gap-2 text-xs text-foreground/60 mb-3">
          <span className="px-2 py-0.5 bg-foreground/5 rounded">{post.meta.category}</span>
          <span>•</span>
          <span>{post.meta.date}</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-cormorant mb-4">
          {post.meta.title}
        </h1>
        
        {post.meta.summary && (
          <p className="text-base text-foreground/70 italic">{post.meta.summary}</p>
        )}
      </header>

      {/* Area Konten MDX (Render HTML Otomatis) */}
      {/* Properti 'prose' opsional, kita bisa styling manual atau memakai plugin tailwindcss/typography */}
      <div className="prose dark:prose-invert max-w-none text-foreground/90 leading-relaxed space-y-6">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}