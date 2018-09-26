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
    // Only allow user to go up to 100 results or max results, whichever is lowest
    const recipeCount = Math.min(this.props.searchData.data.hits.length, 99);
    if (recipeNumber < recipeCount - 1) {
      // if (recipeNumber < this.props.searchData.data.hits.length - 1) {
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
    const recipeCount = data ? data.hits.length : "";
    const recipeData =
      data && recipeCount ? data.hits[recipeNumber].recipe : "";
    const recipeTitle =
      data && recipeCount ? data.hits[recipeNumber].recipe.label : "";
    const imgURL =
      data && recipeCount ? data.hits[recipeNumber].recipe.image : "";
    const serving =
      data && recipeCount ? data.hits[recipeNumber].recipe.yield : "";
    const recipeSourceName =
      data && recipeCount ? data.hits[recipeNumber].recipe.source : "";
    const recipeSourceURL =
      data && recipeCount ? data.hits[recipeNumber].recipe.url : "";
    const ingredients =
      data && recipeCount ? data.hits[recipeNumber].recipe.ingredientLines : "";
    const calories =
      data && recipeCount ? data.hits[recipeNumber].recipe.calories : "";

    return (
      <div className="recipe-card">
        {data ? (
          <div>
            <div className="recipe-control">
              <button
                onClick={() => this.decrementRecipeNumber()}
              >{`<`}</button>
              <span>
                {/* Display only up to 100 results */}
                Recipe #{recipeNumber + 1}/
                {recipeCount > 99 ? `100` : recipeCount}
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
              {/* If there are no ingredients, don't display anything */}
              {ingredients
                ? ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))
                : ""}
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
