import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.homePage}>
      <div className={styles.heroGlow} aria-hidden="true" />
      <div className={styles.heroGrid}>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>New Collection · 2026</span>
          <h1 className={styles.title}>Discover Your Style</h1>
          <p className={styles.subtitle}>
            Curated essentials and statement pieces for the modern wardrobe.
            Quality craftsmanship, timeless design — find pieces that feel
            unmistakably yours.
          </p>
          <div className={styles.ctaRow}>
            <Link to="/shop" className={styles.shopButton}>
              Shop Now
              <span className={styles.buttonArrow} aria-hidden="true">
                →
              </span>
            </Link>
            <span className={styles.ctaHint}>Free shipping on orders over $50</span>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.imageFrame}>
            <img
              className={styles.heroImage}
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop"
              alt="Curated fashion collection displayed in a modern boutique"
            />
            <div className={styles.imageOverlay} aria-hidden="true" />
          </div>
          <div className={styles.floatingBadge} aria-hidden="true">
            <span className={styles.badgeValue}>500+</span>
            <span className={styles.badgeLabel}>Premium Items</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
