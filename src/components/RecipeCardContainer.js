import React from "react";
import RecipeCard from "./RecipeCard";
import "../styles/RecipeCardContainer.css";

// This component is only displayed if there is data
function RecipeCardContainer(props) {
  return (
    <div className="container">
      {props.searchData ? (
        <RecipeCard
          searchData={props.searchData}
          // getRecipeCard={props.getRecipeCard}
          loaded={props.loaded}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default RecipeCardContainer;
