import { render, screen, waitFor } from "@testing-library/react";
import Shop from "./Shop";

vi.mock("../../services/api", () => ({
  product: vi.fn(() =>
    Promise.resolve([
      {
        id: 1,
        title: "Mock Product",
        price: 20,
        image: "mock.jpg",
      },
    ])
  ),
}));

test("shows loading indicator initially", function () {
  render(<Shop addToCart={function () {}} />);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});

test("renders product after API resolves", async function () {
  render(<Shop addToCart={function () {}} />);
  await waitFor(() =>
    expect(screen.getByText("Mock Product")).toBeInTheDocument()
  );
});
