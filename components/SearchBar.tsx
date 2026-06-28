import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="mb-6">
      <h3 className="font-semibold mb-2 flex items-center gap-2 text-foreground/80">
        <span>🔎</span> Search
      </h3>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search Keyword..."
        className="w-full p-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-500 text-sm transition-colors duration-300 ease-in-out"
      />
    </div>
  );
}