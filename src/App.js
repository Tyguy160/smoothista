import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import Blender from "./components/Blender";
import Recipe from "./components/RecipeCard";

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
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Smoothista</h1>
        </header>
        <Search getSearchData={this.getSearchData} />
        <Blender />
        <Recipe searchData={this.state.searchData} />
      </div>
    );
  }
}

export default App;
