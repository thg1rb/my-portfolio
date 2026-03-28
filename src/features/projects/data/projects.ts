import type { ProjectFrontmatter } from "../types";

// Static project data - metadata for listing pages
// Full MDX content is loaded separately on detail pages
export const projectsData: Record<"en" | "th", ProjectFrontmatter[]> = {
  en: [
    {
      slug: "ku-review",
      title: "KU Review",
      year: "2024",
      startDate: "Jan 2024",
      endDate: "Mar 2024",
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
      startDate: "Aug 2023",
      endDate: "Dec 2023",
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
      startDate: "Jan 2023",
      endDate: "Jul 2023",
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
      startDate: "ม.ค. 2024",
      endDate: "มี.ค. 2024",
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
      startDate: "ส.ค. 2023",
      endDate: "ธ.ค. 2023",
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
      startDate: "ม.ค. 2023",
      endDate: "ก.ค. 2023",
      description: "ระบบจัดการเอกสารองค์กร พร้อมระบบอนุมัติและควบคุมเวอร์ชัน",
      techStack: ["Laravel", "Vue.js", "MySQL", "Docker"],
      thumbnail: "/images/doc-system.jpg",
    },
  ],
};

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

function parseDate(dateStr: string): number {
  const [month, year] = dateStr.split(" ");
  const monthIndex = monthMap[month] ?? 0;
  const yearNum = parseInt(year, 10);
  return yearNum * 12 + monthIndex;
}

export function getAllProjectsStatic(
  locale: "en" | "th",
): ProjectFrontmatter[] {
  return projectsData[locale].sort(
    (a, b) => parseDate(b.endDate) - parseDate(a.endDate)
  );
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
