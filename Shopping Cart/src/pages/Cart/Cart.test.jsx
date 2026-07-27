import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Cart from "./Cart";
test("shows empty cart message", function(){
  render(<Cart cart={[]} updateCartAmount={function(){}} removeFromCart={function(){}} />, {wrapper: MemoryRouter});
  expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
});
test("renders cart items and total", function(){
  const cart=[{ 
    id: 1, 
    title: "Item one", 
    price: 10, 
    amount: 2, 
    image: "a.jpg" 
}];
  render(<Cart cart={cart} updateCartAmount={function(){}} removeFromCart={function(){}} />, {wrapper: MemoryRouter});
  expect(screen.getByText("Item one")).toBeInTheDocument();
  expect(screen.getByText(/grand total/i)).toHaveTextContent("20.00");
});
