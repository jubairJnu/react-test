import { render, screen } from "@testing-library/react";
import App from "./App";

it("should return  Hello World correctly", () => {
  render(<App />);
  const element = screen.getByText("Hello World");
  expect(element).toBeInTheDocument();
});
