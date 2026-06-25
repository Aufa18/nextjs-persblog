'use client';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between py-6 backdrop-blur-md">
      <Link href="/" className="text-lg font-bold">
        morethan-log
      </Link>
      <div className="flex items-center space-x-6 text-sm">
        {mounted && (
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-lg hover:opacity-80 transition-opacity"
            aria-label="Toggle Dark Mode"
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
        )}
        <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition">
          About
        </Link>
      </div>
    </nav>
  );
}