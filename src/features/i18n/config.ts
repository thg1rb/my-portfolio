export type Locale = "en" | "th";

export const locales: Locale[] = ["en", "th"];

export const translations = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      about: "About",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Bright",
      role: "Computer Science Student",
      university: "Kasetsart University",
      intro:
        "Software Developer fueled by a passion for new tech, dedicated to creating meaningful impact and solving problems in a world full of opportunities and challenges.",
      specializesIn: "I work with",
      viewProjects: "View Projects",
      aboutMe: "About Me",
    },
    projects: {
      title: "Projects",
      subtitle: "A collection of projects I have worked on.",
      viewProject: "View project",
      viewSource: "Source",
      techStack: "Tech Stack",
      overview: "Overview",
      backToProjects: "Back to projects",
    },
    about: {
      title: "About",
      subtitle: "A bit about who I am.",
      intro:
        "Greetings to everyone who happens upon this website; I am Bowornrat Tangnararatchakit, or “Bright,” a third-year Computer Science student at Kasetsart University (Bangkhen Campus) who finds joy in transforming abstract concepts into tangible entities or functional products (even if a significant portion of my time is consumed by debugging—but I actually enjoy it 👾).",
      focus: "Current Focus",
      focusText:
        "I’m passionate about Software Development, primarily focusing on building Web, Mobile, and Desktop applications. I care about designing systems that are clean, flexible, and scalable, while also delivering a great user experience. I believe that “a good application shouldn’t just work — it should solve real user problems and be ready to adapt to change.”",
      stack: "Tech Stack",
      languages: "Programming Languages",
      frameworks: "Frameworks",
      databases: "Databases",
      tools: "Tools & Others",
      contact: "Get in touch",
      contactText:
        "Feel free to reach out anytime — I’m always open to opportunities and conversations.",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
      resume: "Resume / CV",
    },
    footer: {
      built: "Made with heart 💕 & commitment 🚀",
      rights: "All rights reserved.",
    },
    common: {
      en: "EN",
      th: "TH",
      toggleTheme: "Toggle theme",
      github: "GitHub",
      year: "2024",
    },
  },
  th: {
    nav: {
      home: "หน้าหลัก",
      projects: "โปรเจกต์",
      about: "เกี่ยวกับฉัน",
      openMenu: "เปิดเมนู",
      closeMenu: "ปิดเมนู",
    },
    hero: {
      greeting: "สวัสดีครับ! ผมชื่อ",
      name: "ไบร์ท",
      role: "นักศึกษาวิทยาการคอมพิวเตอร์",
      university: "มหาวิทยาลัยเกษตรศาสตร์",
      intro:
        "ผมเป็นนักพัฒนาซอฟต์แวร์ ผู้หลงใหลในการเรียนรู้เทคโนโลยีใหม่ ๆ เพื่อนำมาสร้างสรรค์สิ่งที่มีความหมายและแก้ไขปัญหาในโลกซึ่งเต็มไปด้วยโอกาสและความท้าทาย!",
      specializesIn: "เทคโนโลยีที่ใช้",
      viewProjects: "ดูโปรเจกต์",
      aboutMe: "เกี่ยวกับฉัน",
    },
    projects: {
      title: "โปรเจกต์",
      subtitle: "ผลงานจากประสบการณ์การพัฒนาโปรเจกต์",
      viewProject: "ดูโปรเจกต์",
      viewSource: "ซอร์สโค้ด",
      techStack: "เทคโนโลยีที่ใช้",
      overview: "ภาพรวม",
      backToProjects: "กลับไปยังโปรเจกต์",
    },
    about: {
      title: "เกี่ยวกับฉัน",
      subtitle: "รายละเอียดเล็กน้อยที่เกี่ยวกับฉัน",
      intro:
        "สวัสดีทุกท่านที่แวะผ่านเข้ามาในเว็บไซต์นี้ ผมบวรรัตน์ ตั้งนรารัชชกิจ หรือ “ไบร์ท” นักศึกษาชั้นปีที่ 3 สาขาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยเกษตรศาสตร์ (วิทยาเขตบางเขน) ผู้ที่สนุกกับการเปลี่ยนไอเดียสุดแสนจะนามธรรมในหัวให้กลายเป็นสิ่งที่จับต้องได้ หรือโปรดักต์ที่ใช้งานได้จริง (แม้ว่าเวลาส่วนหนึ่งจะหมดไปกับการ debug ก็ตาม—but I actually enjoy it 👾)",
      focus: "สิ่งที่โฟกัส",
      focusText:
        "ผมมีความสนใจหลักและโฟกัสในด้าน Software Development โดยมุ่งเน้นการพัฒนา Web, Mobile และ Desktop Applications เป็นหลัก ในการพัฒนา ผมให้ความสำคัญกับการออกแบบระบบที่มีโครงสร้างชัดเจน ยืดหยุ่น และสามารถต่อยอดได้ในอนาคต พร้อมทั้งมอบประสบการณ์ที่ดีให้กับผู้ใช้งาน เพราะผมเชื่อว่า “Application ที่ดีไม่ใช่เพียงแค่สามารถทำงานได้เท่านั้น แต่ต้องตอบโจทย์และแก้ปัญหาของผู้ใช้งาน และพร้อมปรับตัวต่อการเปลี่ยนแปลง”",
      stack: "เทคโนโลยีที่ใช้",
      languages: "ภาษาโปรแกรมมิ่ง",
      frameworks: "เฟรมเวิร์ก",
      databases: "ฐานข้อมูล",
      tools: "เครื่องมือและอื่นๆ",
      contact: "ช่องทางการติดต่อ",
      contactText: "สามารถติดต่อได้ตลอด 24 ชั่วโมง ยินดีพูดคุยในทุกโอกาส",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "อีเมล",
      resume: "เรซูเม / ประวัติย่อ",
    },
    footer: {
      built: "สร้างด้วย ใจ 💕 & ความมุ่งมั่น 🚀",
      rights: "สงวนลิขสิทธิ์",
    },
    common: {
      en: "EN",
      th: "TH",
      toggleTheme: "เปลี่ยนธีม",
      github: "GitHub",
      year: "2567",
    },
  },
} as const;

type DeepStringify<T> = {
  [K in keyof T]: T[K] extends string ? string : DeepStringify<T[K]>;
};

export type Translations = DeepStringify<typeof translations.en>;
