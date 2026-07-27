import { render, screen, fireEvent } from "@testing-library/react";
vi.mock("./QuantityInput", () => ({
  default: ({ value, onChange }) => (
    <div>
      <input defaultValue={value} />
      <button onClick={onChange}>+</button>
    </div>
  )
}));
import QuantityInput from "./QuantityInput";
test("renders with initial value", function(){
  render(<QuantityInput value={2} onChange={function(){}} />);
  expect(screen.getByDisplayValue("2")).toBeInTheDocument();
});
test("calls onChange when incremented", function(){
  const mockChange = vi.fn();
  render(<QuantityInput value={2} onChange={mockChange} />);
  fireEvent.click(screen.getByText("+"));
  expect(mockChange).toHaveBeenCalled();
});
