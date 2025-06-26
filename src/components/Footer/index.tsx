import styles from './styles.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href=''>Entenda como funciona a técnica Pomodoro</a>
      <a href=''>Pomodoro &copy; {new Date().getFullYear()} - Feito com 🩵</a>
    </footer>
  );
};
