// types/blog.ts
export interface Post {
  id: string | number;
  title: string;
  category: string;
  tags: string[];
  date: string;
  link: string; // atau slug: string;
}