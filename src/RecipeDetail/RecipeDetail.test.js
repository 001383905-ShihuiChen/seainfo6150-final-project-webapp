import React from "react";
import { render } from "@testing-library/react";
import RecipeDetail from "./RecipeDetail.jsx";

it("renders the BookCoverImage component correctly", () => {
  const { container } = render(
    <RecipeDetail
        shortText = "This is great for a special brunch or even a quick and easy dinner. Other breakfast meats can be used, but the deli ham is the easiest since it is already fully cooked."
    />
  );
  expect(container).toMatchSnapshot();
});