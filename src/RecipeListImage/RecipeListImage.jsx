import React from "react";
import css from "./RecipeListImage.module.css"

const RecipeListImage = ({url, title}) => {
  return (
    <div className = {css.imageStyle}>
      <img src={url} alt={title} />
    </div>
  );
};

export default RecipeListImage;