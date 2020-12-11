import React, {useEffect, useState} from "react";
import { Switch, Route, Link } from "react-router-dom";

import Home from "./Home/Home.jsx";
import Category from "./Category/Category.jsx";

import Aboutus from "./Aboutus/Aboutus.jsx";
import Contactus from "./Contactus/Contactus.jsx";
import Submitrequest from "./Submit/Submitrequest.jsx";
import Login from "./Joinin/Joinin.jsx";
import Recipe from "./Recipe/Recipe.jsx";
import Error from "./Error/Error.jsx";
import ThankPage from "./ThankPage/ThankPage.jsx";
import { isEmpty } from "lodash";
import RecipeList from "./RecipeList/RecipeList.jsx";
// here is some external content. look at the /baz route below
// to see how this content is passed down to the components via props

function App() {
  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // put data fetching code here!
      const result = await fetch("https://demo9023671.mockable.io/");
      const resultJson = await result.json();
      setFetchedData(resultJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);
  let displayBreakfast;
  let displayLunch;
  let displayDinner;
  let displayDrink;
  let displayDesert;

  if(!isEmpty(fetchedData)) {
    var categoryBreakfast = Object.values(fetchedData.breakfast);
    var categoryLunch = Object.values(fetchedData.lunch);
    var categoryDinner = Object.values(fetchedData.dinner);
    var categoryDrink = Object.values(fetchedData.drink);
    var categoryDesert = Object.values(fetchedData.desert);

    
    displayBreakfast = (
      <RecipeList recipe={categoryBreakfast} pageTitle="Breakfast" />
    );
    displayLunch = (
      <RecipeList recipe={categoryLunch} pageTitle="Lunch" />
    );
    
    displayDinner = (
      <RecipeList recipe={categoryDinner} pageTitle="Dinner" />
    );
    displayDrink = (
      <RecipeList recipe={categoryDrink} pageTitle="Drink" />
    );
    displayDesert = (
      <RecipeList recipe={categoryDesert} pageTitle="Desert" />
    );
    
  } else {
    displayBreakfast = <div><center>Data is fetching F</center></div>;
    displayLunch = <div><center>Data is fetching l</center></div>;
    displayDinner = <div><center>Data is fetching</center></div>;
    displayDrink = <div><center>Data is fetching</center></div>;
    displayDesert = <div><center>Data is fetching</center></div>;
  }

  return (
    <>
      
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/category" exact component={Category} />
        
        <Route path="/aboutus" exact component={Aboutus} />
        <Route path="/contactus" exact component={Contactus} />
        <Route path="/login" exact component={Login} />
        <Route path="/contactus/submitrequest" exact component={Submitrequest} />
        <Route
            path="/breakfast"
            exact
            render={() => displayBreakfast}
          />
          <Route
            path="/lunch"
            exact
            render={() => displayLunch}
          />
          <Route
            path="/dinner"
            exact
            render={() => displayDinner}
          />
          <Route
            path="/drink"
            exact
            render={() => displayDrink}
          />
          <Route
            path="/desert"
            exact
            render={() => displayDesert}
          />
          {/* passing parameters via a route path */}
          <Route
            path="/recipe/:categoryId/:recipeId"
            exact
            render={({ match }) => (
              // getting the parameters from the url and passing
              // down to the component as props
              <Recipe
                categoryId={match.params.categoryId}
                recipeId={match.params.recipeId}
              />
            )}
          />
        <Route path="/thankyou" exact component={ThankPage} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
