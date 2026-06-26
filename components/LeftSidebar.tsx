import { tags } from '@/data/blogData';

export default function LeftSidebar() {
  return (
    <div>
      <h3 className="font-semibold mb-4 flex items-center gap-2 text-foreground/80">
        <span>🏷</span> Tags
      </h3>
      <ul className="space-y-1">
        {tags.map((tag) => (
          <li key={tag}>
            {/* Efek hover otomatis berubah mengikuti tema (Light ke gelap, Dark ke terang) */}
            <button className="block w-full text-left px-3 py-1.5 -ml-3 rounded-lg text-sm text-foreground/70 hover:bg-foreground/10 transition-colors">
              {tag}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}