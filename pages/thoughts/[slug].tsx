import type { ReactElement } from "react";
import { GetStaticProps } from "next";
import { markdownToHtml } from "lib/markdown";
import { getAllThoughts, getThoughtBySlug, Thought } from "lib/thoughts";
import { ParsedUrlQuery } from "querystring";

interface ThoughtProps {
  thought: Thought;
};


export default function ThoughtPage({ thought }: ThoughtProps): ReactElement {
  return (
    <section className="content" id="thought">
      <h1>{thought.meta.title}</h1>
      <div className="markdown" dangerouslySetInnerHTML={{__html: thought.content }} />
    </section>
  );
}

interface PageParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<ThoughtProps, PageParams> = async (context) => {
  // We know a slug will exist as we mapped all possible slugs in getStaticPaths
  // This is why we use the Non-null assertion operator
  const slug = context.params!.slug;
  const response = getThoughtBySlug(slug);
  const content = await markdownToHtml(response.content)
  const thought: Thought = { ...response, content };
  return { props: { thought } }
}

export async function getStaticPaths() {
  const docs = getAllThoughts();

  return {
    paths: docs.map((doc) => {
      return {
        params: {
          slug: doc.meta.slug,
        }
      };
    }),
    fallback: 'blocking'
  };
}
