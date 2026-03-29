import type { ProjectFrontmatter } from "../types";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "src", "contents", "projects");

const monthMap: Record<string, number> = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
  "ม.ค.": 0,
  "ก.พ.": 1,
  "มี.ค.": 2,
  "เม.ย.": 3,
  "พ.ค.": 4,
  "มิ.ย.": 5,
  "ก.ค.": 6,
  "ส.ค.": 7,
  "ก.ย.": 8,
  "ต.ค.": 9,
  "พ.ย.": 10,
  "ธ.ค.": 11,
};

// Read all project files for a given locale
function readProjectFiles(locale: "en" | "th"): ProjectFrontmatter[] {
  const localeDir = path.join(CONTENT_DIR, locale);

  if (!fs.existsSync(localeDir)) {
    return [];
  }

  const files = fs.readdirSync(localeDir);
  const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

  return mdxFiles.map((file) => {
    const filePath = path.join(localeDir, file);
    const { data } = matter.read(filePath);
    return data as ProjectFrontmatter;
  });
}

function parseDate(dateStr: string): number {
  const [month, year] = dateStr.split(" ");
  const monthIndex = monthMap[month] ?? 0;
  const yearNum = parseInt(year, 10);
  return yearNum * 12 + monthIndex;
}

export function getAllProjectsStatic(
  locale: "en" | "th",
): ProjectFrontmatter[] {
  const projects = readProjectFiles(locale);
  return projects.sort((a, b) => parseDate(b.endDate) - parseDate(a.endDate));
}

export function getProjectBySlugStatic(
  slug: string,
  locale: "en" | "th",
): ProjectFrontmatter | null {
  const projects = readProjectFiles(locale);
  return projects.find((p) => p.slug === slug) || null;
}

export function getProjectSlugsStatic(): string[] {
  // Read from English directory to get all slugs
  const projects = readProjectFiles("en");
  return projects.map((p) => p.slug);
}
