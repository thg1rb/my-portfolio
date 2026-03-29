// This file uses server-only APIs and should only be imported in Server Components
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "src", "contents", "projects");

export function getMDXContent(
  slug: string,
  locale: "en" | "th",
): string | null {
  const filePath = path.join(CONTENT_DIR, locale, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    // Fallback to English if locale not found
    const fallbackPath = path.join(CONTENT_DIR, "en", `${slug}.mdx`);
    if (!fs.existsSync(fallbackPath)) return null;

    const { content } = matter.read(fallbackPath);
    return content.trim();
  }

  const { content } = matter.read(filePath);
  return content.trim();
}

export function getProjectFrontmatter(
  slug: string,
  locale: "en" | "th",
): Record<string, any> | null {
  const filePath = path.join(CONTENT_DIR, locale, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    // Fallback to English if locale not found
    const fallbackPath = path.join(CONTENT_DIR, "en", `${slug}.mdx`);
    if (!fs.existsSync(fallbackPath)) return null;

    const { data } = matter.read(fallbackPath);
    return data;
  }

  const { data } = matter.read(filePath);
  return data;
}
