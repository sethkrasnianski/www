"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "app/theme-provider";
import styles from "./Header.module.scss";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/thoughts", label: "Thoughts" },
  { href: "/contact", label: "Contact" },
];

const Header: React.FC = () => {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setScrolled(
        (window.scrollY || document.documentElement.scrollTop || 0) > 12,
      );
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <Link href="/" aria-label="Home" className={styles.logo}>
          <svg
            viewBox="0 0 122 82"
            width="50"
            height="34"
            fill="currentColor"
            className={styles.logoMark}
            aria-hidden="true"
          >
            <rect
              className={styles.logoFrame}
              x="2.5"
              y="2.5"
              width="117"
              height="77"
              fill="none"
              stroke="currentColor"
              strokeWidth="5"
            />
            <path
              className={styles.logoInitials}
              d="M40.88,25.78a12.74,12.74,0,0,0-4.1-4.67A11.41,11.41,0,0,0,30,19.22c-6.82,0-11.81,4.36-11.81,10.86A8.74,8.74,0,0,0,21.12,37a18.64,18.64,0,0,0,5.62,3.47l3.79,1.77a18.37,18.37,0,0,1,5,2.9,6.28,6.28,0,0,1,2,4.92c0,4.23-2.71,8.33-8.46,8.33A8,8,0,0,1,23.11,56a9.94,9.94,0,0,1-2.53-5.37L16,51.92a15.26,15.26,0,0,0,3.91,7.45,12.56,12.56,0,0,0,9.15,3.41c7.58,0,13.32-5.18,13.32-12.94a10.13,10.13,0,0,0-3-7.64,20.45,20.45,0,0,0-6.5-4l-4-1.77a13.75,13.75,0,0,1-4.42-2.65,4.42,4.42,0,0,1-1.62-3.64c0-3.91,2.9-6.5,7.07-6.5a7.58,7.58,0,0,1,4.73,1.45,10.15,10.15,0,0,1,2.46,3.16Zm16.44-5.87V50.34c0,2.59,0,5.24-1.58,6.82a4.44,4.44,0,0,1-3.16,1.2A6.81,6.81,0,0,1,47.76,56l-2.59,3.66a9.55,9.55,0,0,0,7.51,3.09,8.65,8.65,0,0,0,6.69-2.65c2.53-2.65,2.6-6.5,2.6-9.91V19.91H57.32Zm23.75,0h-4.7V62H81V43.9l1.2-1.2L99.52,62H106L85.59,39.55l19.7-19.63H99L81,38V19.91h0Z"
            />
          </svg>
        </Link>

        <nav className={styles.nav}>
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${isActive ? styles.active : ""}`}
              >
                <span className={styles.navLabel}>{item.label}</span>
              </Link>
            );
          })}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className={styles.themeToggle}
          >
            {theme === "dark" ? (
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36A5.5 5.5 0 0 1 12.4 3.1 8.9 8.9 0 0 0 12 3Z" />
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
