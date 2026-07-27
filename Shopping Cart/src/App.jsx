import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./components/Navbar/Layout";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import toast from "react-hot-toast";
function App() {
  const [cart, setCart] = useState([]);
  function addToCart(product, selectedQuantity){
    setCart((oldCart) => {
      const added = oldCart.findIndex((exist) => exist.id === product.id);
      let message = "";
      if (added !== -1) {
        const newCart = [...oldCart];
        newCart[added] = {
          ...newCart[added],
          amount: newCart[added].amount + selectedQuantity,
        };
        message = product.title + " x " + newCart[added].amount;
        toast.success(message, {
          duration: 2200,
          style: {
            borderRadius: '10px',
            background: 'rgb(50, 53, 51)',
            color: 'white',
          },
        });
        return newCart;
      }
      message = product.title + " added to cart";
      toast.success(message, {
        duration: 2200,
        style: {
          borderRadius: '10px',
          background: 'rgb(50, 53, 51)',
          color: 'white',
        },
      });
      return [
        ...oldCart,
        {
          ...product,
          amount: selectedQuantity,
        },
      ];
    });
  }
  function updateCartQuantity(productId, newQuantity){
    setCart((oldCart) => {
      if (newQuantity <= 0) {
        return oldCart.filter((item) => item.id !== productId);
      }
      return oldCart.map((item) =>
        item.id === productId ? { ...item, amount: newQuantity } : item
      );
    });
  }
  function removeFromCart(productId){
    setCart((oldCart) => {
      const item = oldCart.find((i) => i.id === productId);
      if (item) {
        toast.success(item.title + " removed from cart", {
          duration: 2200,
          style: {
            borderRadius: '10px',
            background: 'rgb(50, 53, 51)',
            color: 'white',
          },
        });
      }
      return oldCart.filter((i) => i.id !== productId);
    });
  }
  function getTotalCartItems(){
    let total = 0;
    cart.forEach((item) => {
      total = item.amount + total;
    });
    return total;
  }
  return (
    <Routes>
      <Route element={<Layout getTotalCartItems={getTotalCartItems} />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} />} />
        <Route path="/cart" element={ <Cart cart={cart} updateCartAmount={updateCartQuantity} removeFromCart={removeFromCart} />}/></Route>
    </Routes>
  );
}
export default App;
