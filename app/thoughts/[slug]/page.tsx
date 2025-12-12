import { notFound } from "next/navigation";
import { markdownToHtml } from "lib/markdown";
import { getAllThoughts, getThoughtBySlug } from "lib/thoughts";

interface ThoughtPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const thoughts = await getAllThoughts();

  return thoughts.map((thought) => ({
    slug: thought.meta.slug,
  }));
}

async function getThought(slug: string) {
  try {
    const response = await getThoughtBySlug(slug);
    const content = await markdownToHtml(response.content);
    return { ...response, content };
  } catch {
    return null;
  }
}

export default async function ThoughtPage({ params }: ThoughtPageProps) {
  const { slug } = await params;
  const thought = await getThought(slug);

  if (!thought) {
    notFound();
  }

  return (
    <section className="content" id="thought">
      <h1>{thought.meta.title}</h1>
      <div
        className="markdown"
        dangerouslySetInnerHTML={{ __html: thought.content }}
      />
    </section>
  );
}
