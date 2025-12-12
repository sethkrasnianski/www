import Link from "next/link";
import { getAllThoughts } from "lib/thoughts";
import { markdownToPlainText } from "lib/markdown";

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
    <section className="content" id="thoughts">
      {thoughts.map((thought) => {
        const date = new Date(thought.meta.date);
        const content = thought.content.replace(/(<([^>]+)>)/gi, "");
        const day = date.getDate();
        const month = new Intl.DateTimeFormat("en-US", {
          month: "short",
        }).format(date);

        return (
          <article key={thought.meta.slug}>
            <aside>
              <div className="month">{month}</div>
              <div className="day">{day}</div>
            </aside>
            <Link href={`/thoughts/${thought.meta.slug}`}>
              <h2>{thought.meta.title}</h2>
            </Link>
            <p>
              {content.substring(0, 275)}
              {content.length > 275 && "..."}
            </p>
          </article>
        );
      })}
    </section>
  );
}
