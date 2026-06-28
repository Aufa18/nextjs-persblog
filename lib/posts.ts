import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Sentralisasi deklarasi folder content
const contentDir = path.join(process.cwd(), 'content');

export async function getPostBySlug(slug: string) {
  try {
    const filePath = path.join(contentDir, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    const { data, content } = matter(fileContent);
    return { meta: data, content };
  } catch (error) {
    return null; 
  }
}

export function getAllPostSlugs() {
  if (!fs.existsSync(contentDir)) return [];
  
  const files = fs.readdirSync(contentDir);
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace('.mdx', ''));
}