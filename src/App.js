import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import Blender from "./components/Blender";
import RecipeCardContainer from "./components/RecipeCardContainer";

import imgURL from "./smoothistaLogo.png";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchData: null
    };
  }

  getSearchData = searchData => {
    this.setState({
      searchData: searchData
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <h1 className="App-title">Smoothista</h1> */}
          <img src={imgURL} className="App-logo" />
        </header>
        <Search getSearchData={this.getSearchData} />
        <Blender />
        <RecipeCardContainer searchData={this.state.searchData} />
      </div>
    );
  }
}

export default App;
