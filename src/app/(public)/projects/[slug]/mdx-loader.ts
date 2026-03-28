// This file uses server-only APIs and should only be imported in Server Components
import fs from "fs";
import path from "path";

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

    const source = fs.readFileSync(fallbackPath, "utf-8");
    // Extract content after frontmatter
    const match = source.match(/^---[\s\S]*?---\n([\s\S]*)$/);
    return match ? match[1].trim() : source;
  }

  const source = fs.readFileSync(filePath, "utf-8");
  // Extract content after frontmatter
  const match = source.match(/^---[\s\S]*?---\n([\s\S]*)$/);
  return match ? match[1].trim() : source;
}
