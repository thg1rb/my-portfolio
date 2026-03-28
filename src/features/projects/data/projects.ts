import type { ProjectFrontmatter } from "../types";

// Static project data - metadata for listing pages
// Full MDX content is loaded separately on detail pages
export const projectsData: Record<"en" | "th", ProjectFrontmatter[]> = {
  en: [
    {
      slug: "ku-review",
      title: "KU Review",
      year: "2024",
      description:
        "A course review platform for Kasetsart University students to share experiences and rate courses.",
      techStack: ["SvelteKit", "TypeScript", "TailwindCSS", "PostgreSQL"],
      thumbnail: "/images/ku-review.jpg",
      github: "https://github.com/bright/ku-review",
      demo: "https://ku-review.vercel.app",
    },
    {
      slug: "nisit-deeden",
      title: "NisitDeeden",
      year: "2023",
      description:
        "Student portal mobile app for accessing university resources, events, and scholarships.",
      techStack: ["Flutter", "Dart", "Firebase", "REST API"],
      thumbnail: "/images/nisit-deeden.jpg",
      github: "https://github.com/bright/nisit-deeden",
    },
    {
      slug: "doc-system",
      title: "Document Management System",
      year: "2023",
      description:
        "Enterprise document workflow system with approval chains and version control.",
      techStack: ["Laravel", "Vue.js", "MySQL", "Docker"],
      thumbnail: "/images/doc-system.jpg",
    },
  ],
  th: [
    {
      slug: "ku-review",
      title: "KU Review",
      year: "2024",
      description:
        "แพลตฟอร์มรีวิวรายวิชาสำหรับนิสิตมหาวิทยาลัยเกษตรศาสตร์ แชร์ประสบการณ์และให้คะแนนรายวิชา",
      techStack: ["SvelteKit", "TypeScript", "TailwindCSS", "PostgreSQL"],
      thumbnail: "/images/ku-review.jpg",
      github: "https://github.com/bright/ku-review",
      demo: "https://ku-review.vercel.app",
    },
    {
      slug: "nisit-deeden",
      title: "NisitDeeden",
      year: "2023",
      description:
        "แอปพลิเคชันมือถือสำหรับนิสิต เข้าถึงทรัพยากรมหาวิทยาลัย กิจกรรม และทุนการศึกษา",
      techStack: ["Flutter", "Dart", "Firebase", "REST API"],
      thumbnail: "/images/nisit-deeden.jpg",
      github: "https://github.com/bright/nisit-deeden",
    },
    {
      slug: "doc-system",
      title: "ระบบจัดการเอกสาร",
      year: "2023",
      description: "ระบบจัดการเอกสารองค์กร พร้อมระบบอนุมัติและควบคุมเวอร์ชัน",
      techStack: ["Laravel", "Vue.js", "MySQL", "Docker"],
      thumbnail: "/images/doc-system.jpg",
    },
  ],
};

export function getAllProjectsStatic(
  locale: "en" | "th",
): ProjectFrontmatter[] {
  return projectsData[locale].sort((a, b) => Number(b.year) - Number(a.year));
}

export function getProjectBySlugStatic(
  slug: string,
  locale: "en" | "th",
): ProjectFrontmatter | null {
  return projectsData[locale].find((p) => p.slug === slug) || null;
}

export function getProjectSlugsStatic(): string[] {
  return projectsData.en.map((p) => p.slug);
}
