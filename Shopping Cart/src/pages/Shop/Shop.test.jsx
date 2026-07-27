import { render, screen, waitFor } from "@testing-library/react";
import Shop from "./Shop";
global.product = vi.fn(() => Promise.resolve([{ 
    id: 1, 
    title: "Mock Product", 
    price: 20, 
    image: "mock.jpg" 
}
]));
test("shows loading indicator initially", function(){
  render(<Shop />);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});
test("renders product after API resolves", async function(){
  render(<Shop />);
  await waitFor(() => expect(screen.getByText("Mock Product")).toBeInTheDocument());
});
