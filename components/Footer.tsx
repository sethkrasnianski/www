import Link from "next/link";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.copy}>&copy; {year} Seth Krasnianski</span>
        <div className={styles.links}>
          <a
            href="http://github.com/sethkrasnianski"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className={styles.social}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.28 1.19-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
            </svg>
          </a>
          <a
            href="http://linkedin.com/pub/seth-krasnianski/30/295/55"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className={styles.social}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.24 8.25h4.5V24H.24V8.25ZM8.34 8.25h4.31v2.15h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V24h-4.5v-6.99c0-1.67-.03-3.82-2.33-3.82-2.33 0-2.68 1.82-2.68 3.7V24h-4.5V8.25Z" />
            </svg>
          </a>
          <Link href="/contact" className={styles.contact}>
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
