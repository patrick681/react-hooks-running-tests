import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import Header from "../components/Header";

test("displays the text 'hello from the Header!'", () => {
  render(<Header />);
  
  // Uncomment the next line to print the rendered DOM for debugging:
  //screen.debug();

  // Use getByText for a clearer error if the text is not found
  expect(screen.getByText("hello from the Header!")).toBeInTheDocument();
});
