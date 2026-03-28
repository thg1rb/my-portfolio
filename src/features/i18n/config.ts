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
        "I build full-stack applications and explore blockchain technology. Passionate about clean code, elegant interfaces, and engineering things that matter.",
      specializesIn: "I work with",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
    },
    projects: {
      title: "Projects",
      subtitle: "A selection of things I have built.",
      viewProject: "View project",
      viewSource: "Source",
      techStack: "Tech Stack",
      overview: "Overview",
      backToProjects: "← Back to projects",
    },
    about: {
      title: "About",
      subtitle: "A bit about who I am.",
      intro:
        "I'm Bright, a Computer Science student at Kasetsart University in Bangkok, Thailand. I'm deeply interested in building modern web applications and exploring the intersection of software engineering and blockchain technology.",
      focus: "Current Focus",
      focusText:
        "Full-stack development with a strong interest in distributed systems and blockchain applications. I enjoy working across the entire stack — from databases and APIs to frontend interfaces.",
      stack: "Tech Stack",
      contact: "Get in touch",
      contactText:
        "I'm always open to interesting conversations, internship opportunities, or collaborations. Feel free to reach out.",
    },
    footer: {
      built: "Built with Next.js & Tailwind CSS",
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
      greeting: "สวัสดี ฉันคือ",
      name: "ไบรท์",
      role: "นักศึกษาวิทยาการคอมพิวเตอร์",
      university: "มหาวิทยาลัยเกษตรศาสตร์",
      intro:
        "ฉันพัฒนาแอปพลิเคชัน Full-stack และสำรวจเทคโนโลยีบล็อกเชน หลงใหลในโค้ดที่สะอาด อินเทอร์เฟซที่สวยงาม และการสร้างสิ่งที่มีความหมาย",
      specializesIn: "เทคโนโลยีที่ใช้",
      viewProjects: "ดูโปรเจกต์",
      contactMe: "ติดต่อฉัน",
    },
    projects: {
      title: "โปรเจกต์",
      subtitle: "ผลงานที่ฉันได้สร้างขึ้น",
      viewProject: "ดูโปรเจกต์",
      viewSource: "ซอร์สโค้ด",
      techStack: "เทคโนโลยีที่ใช้",
      overview: "ภาพรวม",
      backToProjects: "← กลับไปยังโปรเจกต์",
    },
    about: {
      title: "เกี่ยวกับฉัน",
      subtitle: "เล็กน้อยเกี่ยวกับตัวฉัน",
      intro:
        "ฉันคือไบรท์ นักศึกษาวิทยาการคอมพิวเตอร์ที่มหาวิทยาลัยเกษตรศาสตร์ กรุงเทพมหานคร ประเทศไทย ฉันสนใจการพัฒนาเว็บแอปพลิเคชันสมัยใหม่และการสำรวจจุดตัดระหว่างวิศวกรรมซอฟต์แวร์และเทคโนโลยีบล็อกเชน",
      focus: "โฟกัสปัจจุบัน",
      focusText:
        "การพัฒนา Full-stack โดยมีความสนใจในระบบกระจายและแอปพลิเคชันบล็อกเชน ฉันชอบทำงานตลอดสแต็ก — ตั้งแต่ฐานข้อมูลและ API ไปจนถึงอินเทอร์เฟซส่วนหน้า",
      stack: "เทคโนโลยีที่ใช้",
      contact: "ติดต่อฉัน",
      contactText:
        "ฉันเปิดรับการพูดคุยที่น่าสนใจ โอกาสฝึกงาน หรือการทำงานร่วมกันเสมอ อย่าลังเลที่จะติดต่อมา",
    },
    footer: {
      built: "สร้างด้วย Next.js & Tailwind CSS",
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
  [K in keyof T]: T[K] extends string ? string : DeepStringify<T[K]>
}

export type Translations = DeepStringify<typeof translations.en>
