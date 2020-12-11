import React from "react";
import { render } from "@testing-library/react";
import Category from "./Category.jsx";



it("renders the Category component correctly", () => {
  const { container } = render(<category />);
  expect(container).toMatchSnapshot();
});