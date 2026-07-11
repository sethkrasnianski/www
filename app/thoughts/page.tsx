import Link from "next/link";
import PageHeading from "components/PageHeading";
import { getAllThoughts } from "lib/thoughts";
import { markdownToPlainText } from "lib/markdown";
import styles from "./page.module.scss";

export default async function ThoughtsPage() {
  const response = await Promise.all(
    (await getAllThoughts()).map(async (thought) => {
      const content = await markdownToPlainText(thought.content);
      return { ...thought, content };
    }),
  );
  const thoughts = response.sort(
    (a, b) => Date.parse(b.meta.date) - Date.parse(a.meta.date),
  );

  return (
    <section className={styles.section}>
      <PageHeading eyebrow="The Archive">Thoughts</PageHeading>

      <div className={styles.list}>
        {thoughts.map((thought) => {
          const date = new Date(thought.meta.date);
          const content = thought.content.replace(/(<([^>]+)>)/gi, "");
          const day = date.getDate();
          const month = new Intl.DateTimeFormat("en-US", {
            month: "short",
          }).format(date);
          const year = date.getFullYear();

          return (
            <Link
              key={thought.meta.slug}
              href={`/thoughts/${thought.meta.slug}`}
              className={styles.post}
            >
              <div className={styles.dateCol}>
                <div className={styles.month}>{month}</div>
                <div className={styles.day}>{day}</div>
                <div className={styles.year}>{year}</div>
              </div>
              <div>
                <h2 className={styles.title}>{thought.meta.title}</h2>
                <p className={styles.excerpt}>
                  {content.substring(0, 275)}
                  {content.length > 275 && "..."}
                </p>
                <span className={styles.read}>
                  Read <span className={styles.arrow}>&#8594;</span>
                </span>
              </div>
            </Link>
          );
        })}
      </div>
      <div className={styles.closer} />
    </section>
  );
}
