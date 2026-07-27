import {Link} from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
function Cart({cart, updateCartAmount, removeFromCart}){
    if(cart.length===0){
        return <div className="emptyCart"><h2>Your Cart is empty</h2><Link to='/shop'>Go to Shop</Link></div>
    }
    function totalPrice(){
    let total =0;
    cart.forEach(item=> {total= item.amount* item.price + total});
    return total.toFixed(2);
    }
    return (
        <div className="cartPage">
          <h2>Your Cart</h2>
          <div className="cartItems">
            {cart.map(item => (
              <CartItem
                key={item.id}
                item={item}
                updateCartQuantity={updateCartAmount}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>
          <div className="orderSummary">
            <h3>Order Summary</h3>
            <p>Grand Total: {totalPrice()}</p>
          </div>
        </div>
      )
}
export default Cart;