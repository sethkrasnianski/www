import { remark } from "remark";
import html from "remark-html";
import stripMarkdown from "strip-markdown";

interface MarkdownNode {
  type: string;
  depth?: number;
  value?: string;
  url?: string;
  children?: MarkdownNode[];
  data?: {
    hProperties?: Record<string, string>;
  };
}

interface MarkdownTree extends MarkdownNode {
  children: MarkdownNode[];
}

function headingText(node: MarkdownNode): string {
  if (node.value) return node.value;
  return (node.children ?? []).map(headingText).join("");
}

function headingSlug(text: string): string {
  const slug = text
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return slug || "heading";
}

function anchorHeadings() {
  return (tree: MarkdownTree) => {
    const usedSlugs = new Map<string, number>();

    for (const node of tree.children) {
      if (!node.children || node.type !== "heading") continue;

      const text = headingText(node);
      const baseSlug = headingSlug(text);
      const count = usedSlugs.get(baseSlug) ?? 0;
      const slug = count === 0 ? baseSlug : `${baseSlug}-${count + 1}`;
      usedSlugs.set(baseSlug, count + 1);

      node.data = {
        ...node.data,
        hProperties: { ...node.data?.hProperties, id: slug },
      };
      node.children = [
        {
          type: "link",
          url: `#user-content-${slug}`,
          children: node.children,
        },
      ];
    }
  };
}

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(anchorHeadings).use(html).process(markdown);
  return result.toString();
}

export async function markdownToPlainText(markdown: string) {
  const result = await remark().use(stripMarkdown).process(markdown);

  return result.toString();
}
