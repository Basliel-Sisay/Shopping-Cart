import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar({ totalItems }) {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `${styles.navLink}${pathname === path ? ` ${styles.active}` : ""}`;

  return (
    <nav className={styles.nav}>
      <Link to="/" className={linkClass("/")}>
        Home
      </Link>
      <Link to="/shop" className={linkClass("/shop")}>
        Shop
      </Link>
      <Link to="/cart" className={linkClass("/cart")}>
        Cart ({totalItems})
      </Link>
    </nav>
  );
}

export default Navbar;
