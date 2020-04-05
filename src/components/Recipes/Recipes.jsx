import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Recipes.scss";
import { searchRecipe, getRandomRecipes, searchAdvanced } from "../../actions/apiQuery";
import MealCard from "../MealCard/MealCard";
export default class Recipes extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      random: false,
    };

    getRandomRecipes().then(res => {
      console.log(res.data.recipes);
      this.setState({
        recipes: res.data.recipes,
        random: true
      });
    });
  }

  search = text => {
    if (this.props.user_diet === '') {
      searchRecipe(text).then(res => {
        console.log(res.data.results);
        this.setState({
          recipes: res.data.results,
          random: false
        });
      });
    } else {
      searchAdvanced(text, this.props.user_diet).then(res => {
        this.setState({
          recipes: res.data.results,
          random: false,
        });
      });
    }
  };

  render() {
    const recipes  = this.state.recipes;
    console.log("I rendered");
    // console.log(getRandomRecipes().data.results);
    return (
      <div>
        <SearchBar search={this.search} />
        <div className="recipes">
          {
            recipes.map(recipe => (
            <MealCard
              recipe={recipe}
              key={recipe.id}
              addRemoveFav={this.props.addRemoveFav}
              inFavourites={false}
              random={this.state.random}
            />
          ))}
        </div>
      </div>
    );
  }
}
