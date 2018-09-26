import React, { Component } from "react";
import "../styles/RecipeCard.css";

class RecipeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeNumber: 0
    };
  }

  // Shift to next recipe number
  incrementRecipeNumber() {
    let recipeNumber = this.state.recipeNumber;
    if (recipeNumber < this.props.searchData.data.count) {
      recipeNumber += 1;
      this.setState({
        recipeNumber: recipeNumber
      });
    }
  }

  // Shift to prior recipe number
  decrementRecipeNumber() {
    let recipeNumber = this.state.recipeNumber;
    if (recipeNumber > 0) {
      recipeNumber -= 1;
      this.setState({
        recipeNumber: recipeNumber
      });
    }
  }

  render() {
    // If there is no data, don't worry be happy
    const data = this.props.searchData ? this.props.searchData.data : "";

    // If there is data, let's get started
    const recipeNumber = this.state.recipeNumber;
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

    return (
      <div className="recipe-card">
        {data ? (
          <div>
            <div className="recipe-control">
              <button
                onClick={() => this.decrementRecipeNumber()}
              >{`<`}</button>
              <span>
                Recipe #{recipeNumber + 1}/{recipeCount}
              </span>
              <button
                onClick={() => this.incrementRecipeNumber()}
              >{`>`}</button>
            </div>
            <h2 className="recipe-title">{recipeTitle}</h2>
            <img src={imgURL} className="recipe-image" />
            <div className="nutrition-facts">
              <h3>Nutrition Facts</h3>
              <p className="serving">Serving size: {serving}</p>
              <p>Calories per serving: {Math.round(calories)}</p>
            </div>
            <ul className="ingredients">
              <h3>Ingredients</h3>
              {ingredients.map(ingredient => (
                <li key={ingredient.toString()}>{ingredient}</li>
              ))}
            </ul>
            <div className="recipe-source">
              <span>
                <i>
                  Source: <a href={recipeSourceURL}>{recipeSourceName}</a>
                </i>
              </span>
            </div>
            <div className="attribution">
              <div id="edamam-badge" data-color="white" />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default RecipeCard;
