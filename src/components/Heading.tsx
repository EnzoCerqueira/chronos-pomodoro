import styles from './Heading.module.css';

export const Heading = () => {
  const classes = `${styles.heading} ${styles.cyan}`;
  return <h1 className={classes}>Olá mundo (HEADING)</h1>;
};
