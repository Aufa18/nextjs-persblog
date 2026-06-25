import { tags } from '@/data/blogData';

export default function LeftSidebar() {
  return (
    <div>
      <h3 className="font-semibold mb-4 flex items-center gap-2 text-foreground/80">
        <span>🏷</span> Tags
      </h3>
      <ul className="space-y-2">
        {tags.map((tag) => (
          <li key={tag}>
            {/* Efek hover otomatis berubah mengikuti tema (Light ke gelap, Dark ke terang) */}
            <button className="text-sm text-foreground/80 dark:text-foreground/70 hover:text-foreground transition-colors">
              {tag}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}