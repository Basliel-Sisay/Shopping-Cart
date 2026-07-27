import {Routes , Route} from 'react-router-dom';
import { useState } from 'react';
function App(){
  const [cart, setCart] = useState([]);
  function addToCart(product, selectedQuantity){
    setCart(oldCart=>{
      const added = oldCart.findIndex(exist => exist.id === product.id);
    if(added !== -1){
      const newCart = [...oldCart];
      newCart[added]={
          ...newCart[added],
          quantity: newCart[added].quantity + selectedQuantity
      };
      return newCart;
  }
      return [...oldCart,{
          ...product,
          quantity: selectedQuantity
      }];
    }
  );
  };
  function updateCartQuantity(productId, newQuantity){
    setCart(oldCart=>{
      if(newQuantity <=0){
        const noNewProduct = oldCart.filter(item=> item.id !== productId);
        return noNewProduct;
    }
    return oldCart.map(item=> item.id=== productId?{
      ...item,
      quantity: newQuantity
    }:
      item);

    });
  };

  const removeFromCart = (productId) => {
    setCart(oldCart => oldCart.filter(item => item.id !== productId));
  };

  function getTotalCartItems(){
    let total =0;
    cart.forEach(item=> {total= item.quantity + total});
    return total;
   }
    

  
  return(
    <Routes>
  <Route element={<Layout getTotalCartItems={getTotalCartItems} />}>
    <Route path="/" element={<Home />} />
    <Route path="/shop" element={<Shop addToCart={addToCart} />} />
    <Route path="/cart" element={<Cart cart={cart} updateCartQuantity={updateCartQuantity} removeFromCart={removeFromCart}/>}/></Route>
</Routes>
  );
}