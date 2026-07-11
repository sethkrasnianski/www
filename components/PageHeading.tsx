import styles from "./PageHeading.module.scss";

interface PageHeadingProps {
  eyebrow: string;
  children: React.ReactNode;
}

const PageHeading = ({ eyebrow, children }: PageHeadingProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.eyebrow}>
        <span className={styles.tick} />
        <span className={styles.label}>{eyebrow}</span>
      </div>
      <h1 className={styles.title}>{children}</h1>
    </div>
  );
};

export default PageHeading;
