import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Recipes.scss";
import { searchRecipe, getRandomRecipes } from "../../actions/apiQuery";
import MealCard from "../MealCard/MealCard";
export default class Recipes extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
    };
    getRandomRecipes().then(res => {
      console.log(res.data.recipes);
      this.setState({
        recipes: res.data.recipes
      });
    });
  }

  search = text => {
    searchRecipe(text).then(res => {
      console.log(res.data.results);
      this.setState({
        recipes: res.data.results
      });
    });
  };

  render() {
    const { recipes } = this.state;
    // console.log(getRandomRecipes().data.results);
    return (
      <div>
        <SearchBar search={this.search} />
        <div className="recipes">
          {recipes.map(recipe => (
            <MealCard
              recipe={recipe}
              key={recipe.id}
              addRemoveFav={this.props.addRemoveFav}
            />
          ))}
        </div>
      </div>
    );
  }
}
