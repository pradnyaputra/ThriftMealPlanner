import React, { Component } from "react";
import "./Favourites.scss";
import MealCard from "../MealCard/MealCard";

export default class Favourites extends Component {
  render() {
    return (
      <div>
        <div className="recipes">
          {this.props.user_favourites.map(recipe => (
            <MealCard
              key={recipe.id}
              recipe={recipe}
              addRemoveFav={this.props.addRemoveFav}
              inFavourites={true}
            />
          ))}
        </div>
      </div>
    );
  }
}
