import React from "react";
import { render } from "@testing-library/react";
import Book from "./Recipe.jsx";

it("renders the Book component correctly", () => {
  const { container } = render(
    <Book
      categoryId="breakfast"
      bookId="001-h"
    />
  );
  expect(container).toMatchSnapshot();
});