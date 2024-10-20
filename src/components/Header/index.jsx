import styles from "./index.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <small>Free Shipping on orders above 999/-</small>
      <small>Call us on: +91 9989898989</small>
    </header>
  );
};

export default Header;
