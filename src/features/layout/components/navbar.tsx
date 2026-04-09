"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/src/features/theme/components/theme-toggle";
import { LanguageSwitcher } from "@/src/features/i18n/components/language-switcher";
import { Container } from "./container";
import { useI18n } from "@/src/features/i18n/context";
import { cn } from "@/src/lib/utils";

export function Navbar() {
  const { t } = useI18n();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  // Separate state to drive the CSS transition (mounted vs visible)
  const [isAnimating, setIsAnimating] = useState(false);

  // When opening: mount first, then trigger the transition on the next frame.
  // When closing: trigger the transition first, then unmount after it finishes.
  const TRANSITION_MS = 250;

  const openMenu = () => {
    setMobileOpen(true);
    // Let the DOM paint the initial (collapsed) state, then animate to open
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsAnimating(true));
    });
  };

  const closeMenu = () => {
    setIsAnimating(false);
    // Wait for the CSS transition to finish before unmounting
    setTimeout(() => setMobileOpen(false), TRANSITION_MS);
  };

  const toggleMenu = () => (mobileOpen ? closeMenu() : openMenu());

  // Close menu on route change
  useEffect(() => {
    closeMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/projects", label: t.nav.projects },
    { href: "/about", label: t.nav.about },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
        <Container>
          <nav
            className="flex h-14 items-center justify-between"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link
              href="/"
              className="text-sm font-semibold tracking-tight text-foreground transition-opacity hover:opacity-70"
            >
              bright.xyz
            </Link>

            {/* Desktop nav links */}
            <ul className="hidden items-center gap-6 md:flex" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm transition-colors",
                      isActive(link.href)
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right controls */}
            <div className="flex items-center gap-1">
              <LanguageSwitcher className="hidden md:flex" />
              <div
                className="mx-1 hidden h-4 w-px bg-border md:block"
                aria-hidden
              />
              <ThemeToggle className="hidden md:flex" />

              {/* Mobile hamburger */}
              <button
                className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:hidden"
                onClick={toggleMenu}
                aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
                aria-expanded={mobileOpen}
              >
                {/* Animate icon swap */}
                <span
                  className="transition-all duration-200"
                  style={{
                    opacity: isAnimating ? 0 : 1,
                    transform: isAnimating
                      ? "rotate(90deg) scale(0.8)"
                      : "rotate(0deg) scale(1)",
                    position: "absolute",
                  }}
                >
                  <Menu className="h-4 w-4" aria-hidden />
                </span>
                <span
                  className="transition-all duration-200"
                  style={{
                    opacity: isAnimating ? 1 : 0,
                    transform: isAnimating
                      ? "rotate(0deg) scale(1)"
                      : "rotate(-90deg) scale(0.8)",
                    position: "absolute",
                  }}
                >
                  <X className="h-4 w-4" aria-hidden />
                </span>
              </button>
            </div>
          </nav>
        </Container>
      </header>

      {/* Mobile menu — fixed below header so it overlays content instead of pushing it down */}
      {mobileOpen && (
        <div
          className="fixed top-14 left-0 right-0 z-50 border-b border-border bg-background md:hidden overflow-hidden"
          style={{
            maxHeight: isAnimating ? "400px" : "0px",
            opacity: isAnimating ? 1 : 0,
            transition: `max-height ${TRANSITION_MS}ms cubic-bezier(0.4,0,0.2,1), opacity ${TRANSITION_MS}ms ease`,
          }}
        >
          <Container>
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col py-4" role="list">
                {navLinks.map((link, i) => (
                  <li
                    key={link.href}
                    style={{
                      transform: isAnimating
                        ? "translateY(0)"
                        : "translateY(-8px)",
                      opacity: isAnimating ? 1 : 0,
                      transition: `transform ${TRANSITION_MS}ms ease ${i * 40}ms, opacity ${TRANSITION_MS}ms ease ${i * 40}ms`,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={cn(
                        "block py-2 text-sm transition-colors",
                        isActive(link.href)
                          ? "text-foreground font-medium"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                      aria-current={isActive(link.href) ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li
                  className="mt-3 pt-3 border-t border-border flex items-center gap-3"
                  style={{
                    transform: isAnimating
                      ? "translateY(0)"
                      : "translateY(-8px)",
                    opacity: isAnimating ? 1 : 0,
                    transition: `transform ${TRANSITION_MS}ms ease ${navLinks.length * 40}ms, opacity ${TRANSITION_MS}ms ease ${navLinks.length * 40}ms`,
                  }}
                >
                  <LanguageSwitcher />
                  <ThemeToggle />
                </li>
              </ul>
            </nav>
          </Container>
        </div>
      )}

      {/* Full-screen blur overlay behind the header */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{
            backdropFilter: isAnimating ? "blur(4px)" : "blur(0px)",
            backgroundColor: isAnimating
              ? "hsl(var(--background) / 0.5)"
              : "hsl(var(--background) / 0)",
            transition: `backdrop-filter ${TRANSITION_MS}ms ease, background-color ${TRANSITION_MS}ms ease`,
          }}
          aria-hidden
          onClick={closeMenu}
        />
      )}
    </>
  );
}
