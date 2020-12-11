import React from "react";
import RecipeListImage from "../RecipeListImage/RecipeListImage.jsx";



const RecipeItem = (props) => {
   return (
     <div >
      <RecipeListImage url={props.url} title={props.title} />
      <p >{props.title}</p>
     </div>
   );
}

export default RecipeItem;
