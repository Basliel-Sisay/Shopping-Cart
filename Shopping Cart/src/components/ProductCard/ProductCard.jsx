import { useState } from "react";
import QuantityInput from "../QuantityInput/QuantityInput";
import styles from "./ProductCard.module.css";

function ProductCard({ product, addToCart }) {
  const [amount, setAmount] = useState(1);

  function incremented() {
    setAmount((before) => before + 1);
  }

  function decremented() {
    if (amount > 1) {
      setAmount((before) => before - 1);
    }
  }

  function change(e) {
    const val = e.target.value;
    if (val === "") {
      setAmount("");
      return;
    }
    const parsed = parseInt(val, 10);
    if (parsed > 0 && !isNaN(parsed)) {
      setAmount(parsed);
    }
  }

  function changeOnCart() {
    if (amount > 0) {
      addToCart(product, amount);
    } else {
      setAmount(1);
    }
  }

  function inputHandler() {
    if (amount < 1 || amount === "") {
      setAmount(1);
    }
  }

  return (
    <div className={styles.productCard}>
      <img
        className={styles.image}
        src={product.image}
        alt={product.title}
      />
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.price}>${product.price}</p>
      <QuantityInput
        value={amount}
        onIncrement={incremented}
        onDecrement={decremented}
        onChange={change}
        onBlur={inputHandler}
      />
      <button className={styles.addButton} onClick={changeOnCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
