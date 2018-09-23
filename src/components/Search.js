import React, { Component } from "react";
import ReactDOM from "react-dom";
import { WithContext as ReactTags } from "react-tag-input";
import axios from "axios";
import { fruits, vegetables } from "../components/Ingredients";
import "../styles/Search.css";

// Key codes used to finalize user input
const KeyCodes = {
  comma: 188,
  enter: 13
};

// Delimiters are used to finalize user input
const delimiters = [KeyCodes.comma, KeyCodes.enter];

// Override default placehold for search box
const placeholder = "Enter some fruits and veggies...";

// API accesss
const baseURL = "https://api.edamam.com/search";
const appId = "1e4db5f4";
const appKey = "9056db40ab369a2ae019b1855c0e3e3b";
const query = "smoothie";
const from = 0;
const to = 100;
// Example URL: https://api.edamam.com/search?app_id=1e4db5f4&app_key=9056db40ab369a2ae019b1855c0e3e3b&q=smoothie,spinach,pumpkin&to=1000

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [],
      // Pull in fruits and veggies from external file
      suggestions: [...fruits, ...vegetables],
      querySets: []
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.requestRecipeData = this.requestRecipeData.bind(this);
  }

  // From ReactTags API - Used to delete a tag
  handleDelete(i) {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i)
    });
  }

  // From ReactTags API - Used to add a new tag
  handleAddition(tag) {
    this.setState(state => ({ tags: [...state.tags, tag] }));
  }

  requestRecipeData(tags) {
    // https://api.edamam.com/search?app_id=1e4db5f4&app_key=9056db40ab369a2ae019b1855c0e3e3b&q=smoothie,spinach,pumpkin&to=1000
    // Make a request for a user with a given ID

    const scrubbedTags = tags.map(tag => tag.text);
    // Store the query set in state
    console.log(scrubbedTags);
    console.log(this.state.querySets.map(set => set.indexOf(scrubbedTags)));
    if (tags.length) {
      this.setState(
        {
          querySets: [...this.state.querySets, scrubbedTags]
        }
        // () => console.log(this.state.querySets)
      );
    }

    // Clean up user-inputed tags into query-able format
    const userInput = tags.length ? `,${tags.map(tag => tag.text).join()}` : "";

    // axios
    //   .get(
    //     `${baseURL}?app_id=${appId}&app_key=${appKey}&q=${query}${userInput}&from=${from}&to=${to}`
    //   )
    //   .then(function(response) {
    //     // handle success
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .then(function() {
    //     // always executed
    //   });
  }

  render() {
    const { tags, suggestions } = this.state;
    return (
      <div>
        <ReactTags
          tags={tags}
          suggestions={suggestions}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          delimiters={delimiters}
          placeholder={placeholder}
        />
        <button onClick={() => this.requestRecipeData(tags)}>Blend</button>
      </div>
    );
  }
}

export default Search;
