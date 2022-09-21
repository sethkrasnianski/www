import { remark } from "remark";
import html from "remark-html";
import stripMarkdown from "strip-markdown";

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export async function markdownToPlainText(markdown: string) {
  const result = await remark().use(stripMarkdown).process(markdown);

  return result.toString();
}
