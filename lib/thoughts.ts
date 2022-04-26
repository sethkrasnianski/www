import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const thoughtsDirectory = join(process.cwd(), 'thoughts');

export interface Thought {
  meta: {
    slug: string;
    title: string;
    date: string;
  };
  content: string;
}

export function getThoughtBySlug(slug: string): Thought {
  const [fileName] = slug.split('.md');
  const fullPath = join(thoughtsDirectory, `${fileName}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const grayMatter = matter(fileContents);
  const data = grayMatter.data as Thought['meta'];

  return { meta: data, content: grayMatter.content };
}

export function getAllThoughts() {
  const slugs = fs.readdirSync(thoughtsDirectory);
  const thoughts = slugs.map((slug) => getThoughtBySlug(slug));

  return thoughts;
}
