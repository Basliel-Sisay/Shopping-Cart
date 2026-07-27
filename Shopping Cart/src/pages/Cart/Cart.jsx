import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import styles from "./Cart.module.css";
function Cart({ cart, updateCartAmount, removeFromCart }){
  if (cart.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <h2 className={styles.emptyTitle}>Your Cart is empty</h2>
        <Link to="/shop" className={styles.shopLink}>
          Go to Shop
        </Link>
      </div>
    );
  }
  function totalPrice() {
    let total = 0;
    cart.forEach((item) => {
      total = item.amount * item.price + total;
    });
    return total.toFixed(2);
  }
  return (
    <div className={styles.cartPage}>
      <h2 className={styles.pageTitle}>Your Cart</h2>
      <div className={styles.cartItems}>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            updateCartQuantity={updateCartAmount}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
      <div className={styles.orderSummary}>
        <h3 className={styles.summaryTitle}>Order Summary</h3>
        <p className={styles.grandTotal}>Grand Total: ${totalPrice()}</p>
      </div>
    </div>
  );
}
export default Cart;
