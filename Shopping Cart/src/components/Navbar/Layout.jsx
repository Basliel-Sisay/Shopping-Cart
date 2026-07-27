import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import styles from "./Layout.module.css";

function Layout({ getTotalCartItems }) {
  return (
    <div className={styles.layout}>
      <Navbar totalItems={getTotalCartItems()} />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
export default Layout;
