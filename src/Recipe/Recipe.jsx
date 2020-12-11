import React, { useEffect, useState } from 'react';
import styles from './Recipe.module.css';
import Header from "../Header/Header";
import RecipeDetail from "../RecipeDetail/RecipeDetail.jsx"
import RecipeImage from "../RecipeImage/RecipeImage.jsx";
import { isEmpty } from 'lodash';



import { Switch, Route, Link } from "react-router-dom";

const Recipe= (props) => {
    const [fetchedData, setFetchedData] = useState();
  
    useEffect(() => {
      const fetchData = async () => {
        // performs a GET request
        const result = await fetch("https://demo9023671.mockable.io/");
        const resultJson = await result.json();
        setFetchedData(resultJson);
      };
      
      if (isEmpty(fetchedData)) {
        fetchData();
      }
    }, [fetchedData]);
    let displayContent;



    if(!isEmpty(fetchedData)) {
    var recipe = fetchedData[props.categoryId][props.recipeId];
    displayContent = (
      <div className={styles.wholeDiv}>
        <Header/>
        <div className={styles.pageTitle}>
          <h2>{recipe.title}</h2>
          <RecipeImage url={recipe.image._url} text={recipe.title} />
          <RecipeDetail
          shortText = {recipe.shortText}
          text = {recipe.text}/>
        </div>
        
        <div >
          <h2 className={styles.formTitle}>Try this recipe!</h2>
        </div>
      </div>
    );
  } else {
    displayContent = <div><center>Data is fetching</center></div>;
  }

  return (
    displayContent
  )
};
export default Recipe;