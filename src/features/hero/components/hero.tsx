"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useI18n } from "@/src/features/i18n/context";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="py-24 md:py-32 lg:py-40" aria-label="Introduction">
      <div className="flex flex-col-reverse items-start gap-10 md:flex-row md:items-center md:justify-between">
        {/* Left: text content */}
        <div className="flex-1">
          {/* Availability badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1"
          >
            <span className="h-2 w-2 rounded-full bg-green-500" aria-hidden />
            <span className="text-xs text-muted-foreground">
              Open to internships &amp; opportunities
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.1}
            className="mb-2 text-sm text-muted-foreground"
          >
            {t.hero.greeting}
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.15}
            className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance"
          >
            {t.hero.name}
            <span className="text-highlight">.</span>
          </motion.h1>

          {/* Role + University */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.25}
            className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1"
          >
            <span className="text-lg font-medium text-foreground md:text-xl">
              {t.hero.role}
            </span>
            <span className="text-muted-foreground" aria-hidden>
              —
            </span>
            <span className="text-lg text-muted-foreground md:text-xl">
              {t.hero.university}
            </span>
          </motion.div>

          {/* Intro */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.35}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            {t.hero.intro}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.45}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              {t.hero.viewProjects}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              {t.hero.aboutMe}
            </Link>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="self-center md:self-auto" // <-- Added this line
        >
          <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full border-2 border-border md:h-52 md:w-52">
            <Image
              src="/images/profile/notion-profile.PNG"
              alt="Profile photo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
