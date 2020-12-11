import React from "react";
import { render } from "@testing-library/react";
import RecipeList from "./RecipeList.jsx";
import { BrowserRouter } from 'react-router-dom'

it("renders the RecipeList component correctly", () => {
  const test = [
    {
      categoryId: "breakfast",
      recipeId: "001-h",
      title: "Ham and Cheese Breakfast Tortillas",
      image: {
        _url: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4536480.jpg&w=596&h=596&c=sc&poi=face&q=85"
      },
    },
    {
        categoryId: "breakfast",
        recipeId: "002-q",
        title: "Quick & Crispy Home Fries",
        image: {
          _url: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6991200.jpg&w=596&h=596&c=sc&poi=face&q=85"
        },
    }
  ]

  // For component with <Link> must nest within <Router>
  const { container } = render(
    <BrowserRouter>
      <RecipeList
        recipe={Object.values(test)}
        pageTitle="category"
      />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});