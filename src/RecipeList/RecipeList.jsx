import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import RecipeItem from "../RecipeItem/RecipeItem.jsx";
import styles from "./RecipeList.module.css";
import Header from "../Header/Header";
const RecipeList = props => {
  return (
    <>
    <Header/>
    <div className={styles.wholeDiv}>
        
      <div className={styles.titleDiv}><h1>Let's find your own recipe!</h1></div>
      <ul className={styles.recipeList}>
        {props.recipe.map((recipe,index) => (
          <Link key={index} className={styles.clickBlock} to={"/recipe/"+recipe.categoryId+"/"+recipe.recipeId}>
            <li key={index}>
              <RecipeItem url={recipe.image._url} title={recipe.title} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
    </>
  );
};

RecipeList.propTypes = {
  recipe: PropTypes.array.isRequired
};
export default RecipeList;