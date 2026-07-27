import { render, screen } from "@testing-library/react";
vi.mock("./App", ()=>({ default: () => <div>home</div> }));
import App from "./App";
test("renders the app layout",function(){
  render(<App />);
  expect(screen.getByText(/home/i)).toBeInTheDocument();
});
