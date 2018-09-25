import React from "react";
import "../styles/RecipeCard.css";

function RecipeCard(props) {
  // If there is no data, don't worry be happy
  const data = props.searchData ? props.searchData.data : "";

  // If there is data, let's get started
  let recipeNumber = 0;
  const recipeCount = data ? data.count : "";
  const recipeData = data ? data.hits[recipeNumber].recipe : "";
  const recipeTitle = data ? data.hits[recipeNumber].recipe.label : "";
  const imgURL = data ? data.hits[recipeNumber].recipe.image : "";
  const serving = data ? data.hits[recipeNumber].recipe.yield : "";
  const recipeSourceName = data ? data.hits[recipeNumber].recipe.source : "";
  const recipeSourceURL = data ? data.hits[recipeNumber].recipe.url : "";
  const ingredients = data
    ? data.hits[recipeNumber].recipe.ingredientLines
    : "";
  const calories = data ? data.hits[recipeNumber].recipe.calories : "";

  console.log("Got the prop!");
  console.log(data);
  return (
    <div className="recipe-card">
      {data ? (
        <div>
          <h2 className="recipe-title">{recipeTitle}</h2>
          <img src={imgURL} />
          <h3>Nutrition Facts</h3>
          <div className="nutrition-facts">
            <p className="serving">Serving size: {serving}</p>
            <p>Calories per serving: {Math.round(calories)}</p>
          </div>
          <h3>Ingredients</h3>
          <ul className="ingredient-list">
            {ingredients.map(ingredient => (
              <li>{ingredient}</li>
            ))}
          </ul>
          <span>
            <i>
              Source: <a href={recipeSourceURL}>{recipeSourceName}</a>
            </i>
          </span>
          <div id="edamam-badge" data-color="white" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default RecipeCard;
