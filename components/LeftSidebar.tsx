import { tags } from '@/data/blogData';
import { FaTags } from 'react-icons/fa';

interface LeftSidebarProps {
  selectedTag: string | null;
  onSelectTag: (tag: string | null) => void;
}

export default function LeftSidebar({ selectedTag, onSelectTag }: LeftSidebarProps) {
  return (
    <div>
      <h3 className="font-semibold mb-4 flex items-center gap-2 text-foreground/80">
        <FaTags className="w-5 h-5" />
        Tags
      </h3>
      <ul className="space-y-1">
        <li>
          <button
            type="button"
            onClick={() => onSelectTag(null)} // null berarti tidak ada filter tag
            className={`block w-full text-left px-3 py-1.5 -ml-3 rounded-lg text-sm transition-colors ${
              selectedTag === null
                ? 'bg-foreground/10 text-foreground font-medium' // Style saat aktif
                : 'text-foreground/70 hover:bg-foreground/10'
            }`}
          >
            All
          </button>
        </li>
        {tags.map((tag) => (
          <li key={tag}>
            <button
              type="button"
              onClick={() => onSelectTag(tag)}
              className={`block w-full text-left px-3 py-1.5 -ml-3 rounded-lg text-sm transition-colors ${
                selectedTag === tag
                  ? 'bg-foreground/10 text-foreground'
                  : 'text-foreground/70 hover:bg-foreground/10'
              }`}
            >
              {tag}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}