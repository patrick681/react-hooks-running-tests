import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Article from "../components/Article";

test("displays the text 'please pass this test'", () => {
  render(<Article />);

  // Uncomment the next line to see the rendered output in your terminal for debugging:
  // screen.debug();

  // Use getByText to throw a clear error if the element isn't found.
  expect(screen.getByText("please pass this test")).toBeInTheDocument();
});
