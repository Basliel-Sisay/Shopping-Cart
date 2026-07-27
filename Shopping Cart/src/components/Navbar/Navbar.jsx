import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar({ totalItems }) {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.navLink}>
        Home
      </Link>
      <Link to="/shop" className={styles.navLink}>
        Shop
      </Link>
      <Link to="/cart" className={styles.cartLink}>
        Cart ({totalItems})
      </Link>
    </nav>
  );
}

export default Navbar;
