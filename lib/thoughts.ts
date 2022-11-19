import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const thoughtsDirectory = join(process.cwd(), "thoughts");

export interface Thought {
  meta: {
    slug: string;
    title: string;
    date: string;
  };
  content: string;
}

export async function getThoughtBySlug(slug: string): Promise<Thought> {
  const [fileName] = slug.split(".md");
  const fullPath = join(thoughtsDirectory, `${fileName}.md`);
  const fileContents = await fs.promises.readFile(fullPath, "utf8");
  const grayMatter = matter(fileContents);
  const data = grayMatter.data as Thought["meta"];

  return { meta: data, content: grayMatter.content };
}

export async function getAllThoughts(): Promise<Thought[]> {
  const slugs = await fs.promises.readdir(thoughtsDirectory);
  let thoughts: Thought[] = [];
  for (const slug of slugs) {
    const thought = await getThoughtBySlug(slug);
    thoughts.push(thought);
  }

  return thoughts.sort(
    (a, b) => Date.parse(b.meta.date) - Date.parse(a.meta.date)
  );
}
