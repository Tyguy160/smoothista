import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import Blender from "./components/Blender";
import Recipe from "./components/RecipeCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Smoothista</h1>
        </header>
        <br />
        <Search />
        <br />
        <Blender />
        <br />
        <Recipe />
      </div>
    );
  }
}

export default App;
