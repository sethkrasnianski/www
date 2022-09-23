import styles from "./Cta.module.scss";

interface CtaProps {
  top: string;
  bottom: string;
}

const Cta = ({ top, bottom }: CtaProps) => {
  return (
    <header className={styles.cta}>
      <h1>
        <span>{top}</span>
        <span>{bottom}</span>
      </h1>
    </header>
  );
};

export default Cta;
