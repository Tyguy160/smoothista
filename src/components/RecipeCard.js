import React from "react";
import "../styles/RecipeCard.css";

function RecipeCard() {
  return (
    <div className="recipe-card">
      <h2 className="recipe-title">Recipe Title</h2>
      <img src="https://via.placeholder.com/150x150" />
      <p className="serving">Serving size</p>
      <h3>Ingredients</h3>
      <ul className="ingredient-list">
        <li>Ingredient</li>
        <li>Ingredient</li>
        <li>Ingredient</li>
        <li>Ingredient</li>
      </ul>
      <h3>Nutrition Facts</h3>
      <ul className="nutrition-facts">
        <li>Calories</li>
        <li>Fat</li>
        <li>Etc.</li>
      </ul>
    </div>
  );
}

export default RecipeCard;
