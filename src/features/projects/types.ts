// Shared types for projects - can be imported by both server and client components

export interface ProjectFrontmatter {
  slug: string;
  title: string;
  year: string;
  description: string;
  techStack: string[];
  thumbnail: string;
  github?: string;
  demo?: string;
}

export interface ProjectMDX {
  frontmatter: ProjectFrontmatter;
  content: string;
}
