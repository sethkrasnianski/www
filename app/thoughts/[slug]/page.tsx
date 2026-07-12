import { notFound } from "next/navigation";
import { markdownToHtml } from "lib/markdown";
import { getAllThoughts, getThoughtBySlug } from "lib/thoughts";
import styles from "./page.module.scss";

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

  const date = new Date(thought.meta.date);
  const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
    date,
  );

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <time className={styles.date} dateTime={date.toISOString()}>
          <span className={styles.month}>{month}</span>
          <span className={styles.day}>{date.getDate()}</span>
          <span className={styles.year}>{date.getFullYear()}</span>
        </time>
        <h1 className={styles.title}>{thought.meta.title}</h1>
      </header>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: thought.content }}
      />
    </article>
  );
}
