import { useState } from "react";
function ProductCard({product, addToCart}){
    const [amount, setAmount] =useState(1);
    function incremented(){
        setAmount(before=> before+1);
    };
    function decremented(){
        if(amount >1){
            setAmount(before => before-1);
        }
    };
    function change(e){
        const val = e.target.value;
        if(val ===""){
            setAmount("");
            return;
        }
        const parsed= parseInt(val, 10);
        if(parsed >0 && !isNaN(parsed)){
            setAmount(parsed);
        }
    };
    function changeOnCart(){
        if(amount >0){
        addToCart(product, amount);
        }
        else{
            setAmount(1);
        }
    };
    function inputHandler(){
        if(amount <1 || amount==""){
            setAmount(1);
        }
    };
    return (
        <div className="productCard">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <div className="quantityControls">
        <button onClick={decremented} disabled={amount <= 1}> - </button>
        <input
          type="number"
          min="1"
          value={amount}
          onChange={change}
          onBlur={inputHandler}
        />
        <button onClick={incremented}> + </button>
      </div>
      <button onClick={changeOnCart}>Add to Cart</button>
    </div>
    )
}