import { FiChevronDown } from 'react-icons/fi';

interface CategoryDropdownProps {
  categories: string[];
  selectedCategory: string | null;
  searchQuery: string;
  isCategoryOpen: boolean;
  onToggleOpen: () => void;
  onSelectCategory: (category: string | null) => void;
  filteredCount: number;
  onClearFilters: () => void;
}

export default function CategoryDropdown({
  categories,
  selectedCategory,
  searchQuery,
  isCategoryOpen,
  onToggleOpen,
  onSelectCategory,
  filteredCount,
  onClearFilters,
}: CategoryDropdownProps) {
  const isFiltering = searchQuery || selectedCategory;

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4 relative">
      <div className="relative">
        <button
          onClick={onToggleOpen}
          className="font-semibold text-foreground/80 text-lg flex items-center gap-2 hover:opacity-80 transition-opacity focus:outline-none group"
        >
          {searchQuery ? `Search results for "${searchQuery}"` : selectedCategory || '📂 All Posts'}
          
          {!searchQuery && (
            <FiChevronDown
              className={`w-5 h-5 transition-transform duration-300 ${isCategoryOpen ? 'rotate-180' : ''}`}
            />
          )}
        </button>

        {isCategoryOpen && !searchQuery && (
          <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-xl shadow-lg z-20 p-2 flex flex-col gap-1">
            <button
              onClick={() => onSelectCategory(null)}
              className={`text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                selectedCategory === null ? 'bg-foreground/10 text-foreground font-medium' : 'text-foreground/70 hover:bg-foreground/5'
              }`}
            >
              All Posts
            </button>
            
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
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
        {isFiltering && (
          <p className="text-sm text-foreground/60">
            Showing {filteredCount} post{filteredCount === 1 ? '' : 's'}.
          </p>
        )}
        {isFiltering && (
          <button
            type="button"
            onClick={onClearFilters}
            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            Clear filters
          </button>
        )}
      </div>
    </div>
  );
}