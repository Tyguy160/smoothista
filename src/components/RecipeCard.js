import React from "react";
import "../styles/RecipeCard.css";

function RecipeCard(props) {
  // If there is no data, don't worry be happy
  const data = props.searchData ? props.searchData.data : "";

  // If there is data, let's get started
  let recipeNumber = 0;
  const recipeData = data ? data.hits[recipeNumber].recipe : "";
  const recipeTitle = data ? data.hits[recipeNumber].recipe.label : "";
  const imgURL = data ? data.hits[recipeNumber].recipe.image : "";
  console.log(imgURL);
  const serving = data ? data.hits[recipeNumber].recipe.yield : "";

  console.log("Got the prop!");
  console.log(data);
  return (
    <div className="recipe-card">
      {data ? (
        <div>
          <h2 className="recipe-title">{recipeTitle}</h2>
          <img src={imgURL} />
          <p className="serving">Serving size: {serving}</p>
          <h3>Ingredients</h3>
          <ul className="ingredient-list">
            {/* {this.props.ingredients.map(ingredient => `<li>${ingredient}</li>`)} */}
          </ul>
          <h3>Nutrition Facts</h3>
          <ul className="nutrition-facts">
            <li>Calories</li>
            <li>Fat</li>
            <li>Etc.</li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default RecipeCard;
