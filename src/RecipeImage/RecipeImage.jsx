import React from 'react'
import css from "./RecipeImage.module.css";

const RecipeImage = ({url, text}) => {
  return (
    <div className = {css.bookCoverStyle}>
      <img src={url} alt={text} />
    </div>
  );
};

export default RecipeImage;