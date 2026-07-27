import QuantityInput from "../QuantityInput/QuantityInput";
import styles from "./CartItem.module.css";

function CartItem({ item, updateCartQuantity, removeFromCart }) {
  const currentTotal = (item.price * item.amount).toFixed(2);

  function incremented() {
    updateCartQuantity(item.id, item.amount + 1);
  }

  function decremented() {
    updateCartQuantity(item.id, item.amount - 1);
  }

  function change(e) {
    const val = e.target.value;
    const parsed = parseInt(val, 10);
    if (parsed > 0 && !isNaN(parsed)) {
      updateCartQuantity(item.id, parsed);
    }
  }

  return (
    <div className={styles.cartItem}>
      <img className={styles.image} src={item.image} alt={item.title} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.price}>${item.price}</p>
      <div className={styles.controls}>
        <QuantityInput
          value={item.amount}
          onIncrement={incremented}
          onDecrement={decremented}
          onChange={change}
        />
      </div>
      <p className={styles.subtotal}>Subtotal: ${currentTotal}</p>
      <button
        className={styles.removeButton}
        onClick={() => removeFromCart(item.id)}
      >
        Remove
      </button>
    </div>
  );
}
export default CartItem;
