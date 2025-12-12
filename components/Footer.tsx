import clsx from "clsx";
import Link from "next/link";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <a
        className={clsx(
          styles["footer__social"],
          styles["footer__social--github"],
        )}
        target="_blank"
        rel="noreferrer"
        href="http://github.com/sethkrasnianski"
      >
        <i className="icon icon-github"></i>
      </a>
      <a
        className={clsx(
          styles["footer__social"],
          styles["footer__social--linkedin"],
        )}
        target="_blank"
        rel="noreferrer"
        href="http://linkedin.com/pub/seth-krasnianski/30/295/55"
      >
        <i className="icon icon-linkedin-square"></i>
      </a>
      <div className="right menu">
        <Link href="/contact">Contact</Link>
      </div>
    </footer>
  );
};

export default Footer;
