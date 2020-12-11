import React from "react";
import { render } from "@testing-library/react";
import RecipeItem from "./RecipeItem.jsx";

it("renders the BooksListItem component correctly", () => {
  const { container } = render(
    <RecipeItem
    url="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4536480.jpg&w=596&h=596&c=sc&poi=face&q=85"
    title="Ham and Cheese Breakfast Tortillas"
    />
  );
  expect(container).toMatchSnapshot();
});