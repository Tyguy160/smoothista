import React, { Component } from "react";
import ReactDOM from "react-dom";
import { WithContext as ReactTags } from "react-tag-input";
import axios from "axios";
import { fruits, vegetables } from "../components/Ingredients";
import Blender from "./Blender";
import "../styles/Search.css";

// Key codes used to finalize user input
const KeyCodes = {
  comma: 188,
  enter: 13
};

// Delimiters are used to finalize user input
const delimiters = [KeyCodes.comma, KeyCodes.enter];

// Override default placehold for search box
const placeholder = "Enter some ingredients";

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
      suggestions: [...fruits, ...vegetables],
      querySets: [],
      data: {},
      loading: false
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

    // Sort the tags alphabetically
    const scrubbedTags = tags.map(tag => tag.text).sort();

    // Store the query set in state
    const querySets = this.state.querySets;

    // Check each query from the query list and compare elements
    // from the scrubbed tags to make sure the new tags don't exist
    const duplicateQueries = querySets.map(
      query => JSON.stringify(query) === JSON.stringify(scrubbedTags)
    );

    // Clean up user-inputed tags into query-able format
    const userInput = tags.length ? `,${tags.map(tag => tag.text).join()}` : "";

    // Clean up query for use as object key
    const userInputKey = userInput
      .substr(1, userInput.length)
      .split(",")
      .sort();

    // If there are no duplicate queries, add the new query into state
    // and make a new API call
    if (duplicateQueries.every(queries => !queries)) {
      // Change reference to this
      let self = this;

      // Change loading to 'true'
      this.setState(
        {
          loading: true
        },
        () => {
          // Make the request
          axios
            .get(
              `${baseURL}?app_id=${appId}&app_key=${appKey}&q=${query}${userInput}&from=${from}&to=${to}`
            )
            .then(function(response) {
              // Handle success
              console.log(response);

              console.log(query);

              // Store the API response into state with the query for cached access later
              self.setState(
                {
                  data: {
                    ...self.state.data,
                    [userInputKey]: response
                  }
                },
                () => self.props.getSearchData(response)
              );

              // Store the query in state, now that we know we received a response
              self.setState({
                querySets: [...self.state.querySets, scrubbedTags],
                loading: false
              });

              // Set the recipe number to 0
              self.props.resetRecipeNumber();
            })
            .catch(function(error) {
              // Handle error
              console.log(error);
            })
            .then(function() {
              // Always executed
              // Scroll to recipe card after loading
              // self.props.scrollToRecipe();
            });
        }
      );
    } else {
      // If the tag request has already been made, pull it from the cache (state)
      this.props.getSearchData(this.state.data[userInputKey]);
    }
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
          autocomplete={true}
        />
        <button
          className="blend-button"
          onClick={() => this.requestRecipeData(tags)}
        >
          Blend
        </button>
        <Blender className={this.state.loading ? "loading" : ""} />
      </div>
    );
  }
}

export default Search;
