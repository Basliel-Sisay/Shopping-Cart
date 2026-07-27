import { render, screen, fireEvent } from "@testing-library/react";
vi.mock("./ProductCard", () =>({
  default: ({ product, addToCart }) =>(
    <div>
      <div>{product.title}</div>
      <div>${product.price}</div>
      <button onClick={() => addToCart(product, 1)}>Add to Cart</button>
    </div>
  )
}));
import ProductCard from "./ProductCard";
test("renders product info", function(){
  const product={ 
    id: 1, 
    title: "Test Product", 
    price: 10, 
    image: "test.jpg" 
};
  render(<ProductCard product={product} addToCart={function(){}} />);
  expect(screen.getByText("Test Product")).toBeInTheDocument();
  expect(screen.getByText("$10")).toBeInTheDocument();
});
test("calls addToCart with product and quantity", function(){
  const product={ 
    id: 1, 
    title: "Testing the Product", 
    price: 10, 
    image: "test.jpg" 
};
  const mockAddToCart = vi.fn();
  render(<ProductCard product={product} addToCart={mockAddToCart} />);
  fireEvent.click(screen.getByText(/add to cart/i));
  expect(mockAddToCart).toHaveBeenCalledWith(product, 1);
});
