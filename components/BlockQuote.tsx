import styles from "./BlockQuote.module.scss";

interface BlockQuoteProps {
  children: React.ReactNode;
}

const BlockQuote = ({ children }: BlockQuoteProps) => {
  return <blockquote className={styles.blockquote}>{children}</blockquote>;
};

export default BlockQuote;
