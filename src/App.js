import React, { Component } from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import RecipeCardContainer from "./components/RecipeCardContainer";

import imgURL from "./smoothistaLogo.png";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchData: null,
      loaded: false
    };
  }

  getSearchData = searchData => {
    this.setState({
      searchData: searchData
    });
  };

  getLoadingStatus = status => {
    this.setState({
      loaded: status
    });
  };

  resetRecipeNumber() {}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <h1 className="App-title">Smoothista</h1> */}
          <img src={imgURL} className="App-logo" />
        </header>
        <Search
          getSearchData={this.getSearchData}
          resetRecipeNumber={this.resetRecipeNumber}
          getLoadingStatus={this.getLoadingStatus}
        />
        <RecipeCardContainer
          searchData={this.state.searchData}
          loaded={this.state.loaded}
        />
      </div>
    );
  }
}

export default App;
