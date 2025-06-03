import styles from './Heading.module.css';

type HeadingProps = {
  children: string;
};

export const Heading = (props: HeadingProps) => {
  const classes = `${styles.heading}`;
  return <h1 className={classes}>{props.children}</h1>;
};
