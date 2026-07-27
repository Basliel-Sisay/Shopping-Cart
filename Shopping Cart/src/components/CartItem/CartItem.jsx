function CartItem({item, updateCartQuantity, removeFromCart}){
    const currentTotal = (item.price*item.amount).toFixed(2);
    function incremented(){
        updateCartQuantity(item.id, item.amount+1);
    }
    function decremented(){
        updateCartQuantity(item.id, item.amount-1);
    }
    function change(e){
        const val = e.target.value;
        const parsed = parseInt(val, 10);
        if(parsed>0 && !isNaN(parsed)){
            updateCartQuantity(item.id, parsed);
        }
    };
    return(
        <div className="cartItem">
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>${item.price}</p>
      <div className="quantityControls">
        <button onClick={decremented} disabled={item.amount <= 1}>- </button>
        <input
          type="number"
          min="1"
          value={item.amount}
          onChange={change}
        />
        <button onClick={incremented}> +</button>
      </div>

      <p>Subtotal: ${currentTotal}</p>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
    )
}
export default CartItem;