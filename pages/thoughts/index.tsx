import type { ReactElement } from "react";
import { GetStaticProps } from "next";
import { getAllThoughts, Thought } from "lib/thoughts";
import Link from "next/link";
import { markdownToPlainText } from "lib/markdown";

interface ThoughtsProps {
  thoughts: Thought[];
}

export default function ThoughtsPage({
  thoughts,
}: ThoughtsProps): ReactElement {
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
              <a>
                <h2>{thought.meta.title}</h2>
              </a>
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

export const getStaticProps: GetStaticProps<ThoughtsProps> = async () => {
  const thoughts = await Promise.all(
    (
      await getAllThoughts()
    ).map(async (thought) => {
      const content = await markdownToPlainText(thought.content);
      return { ...thought, content };
    })
  );

  return { props: { thoughts } };
};
