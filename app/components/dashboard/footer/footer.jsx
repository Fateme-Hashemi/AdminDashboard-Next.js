import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_logo}>Next.js Dashboard</div>
      <div className={styles.footer_text}>© All rights reserved.</div>
    </div>
  );
};

export default Footer;