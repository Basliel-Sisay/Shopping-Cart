import { useState, useEffect } from "react";
import { product } from "../../services/api";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./Shop.module.css";

function Shop({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadingProducts() {
      try {
        const availableProducts = await product();
        if (!availableProducts) {
          throw new Error("Failed to fetch the products");
        }
        setProducts(availableProducts);
      } catch (err) {
        console.log(err);
        setError("Failed to fetch the products");
      } finally {
        setLoading(false);
      }
    }
    loadingProducts();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading ...</div>;
  }
  if (error) {
    return <div className={styles.errorMessage}>{error}</div>;
  }
  return (
    <div className={styles.shopGrid}>
      {products.map((productItem) => (
        <ProductCard
          key={productItem.id}
          product={productItem}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}
export default Shop;
