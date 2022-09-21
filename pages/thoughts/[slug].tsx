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
  try {
    if (!context.params?.slug) throw new Error('Slug required')
    const slug = context.params.slug;
    const response = await getThoughtBySlug(slug);
    const content = await markdownToHtml(response.content)
    const thought: Thought = { ...response, content };
    return { props: { thought } }
  } catch {
    return {
      notFound: true,
    }
  }
}

export async function getStaticPaths() {
  const thoughts = await getAllThoughts();

  return {
    paths: thoughts.map((thought) => {
      return {
        params: {
          slug: thought.meta.slug,
        }
      };
    }),
    fallback: false,
  };
}
