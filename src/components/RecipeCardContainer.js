import React from "react";
import RecipeCard from "./RecipeCard";

// This component is only displayed if there is data
function RecipeCardContainer(props) {
  return (
    <div>
      {props.searchData ? <RecipeCard searchData={props.searchData} /> : ""}
    </div>
  );
}

export default RecipeCardContainer;
