import React, { Component } from "react";
import { Tabs } from "antd";
import Recipes from "../Recipes/Recipes";
import WeekPlan from "../WeekPlan/WeekPlan";
import GroceryList from "../GroceryList/GroceryList";
import Favourites from "../Favourites/Favourites";
import Preferences from "../Preferences/Preferences";

import "./Content.scss";

const { TabPane } = Tabs;

export default class Content extends Component {
  constructor() {
    super();
    this.state = {
      user_weekplan: {
        sunday: [],
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: []
      },
      user_favourites: [],
      user_preferences: []
    };
  }

  addRemoveFav = recipe => {
    let favourites = this.state.user_favourites;

    if (favourites.includes(recipe)) {
      this.setState({
        user_favourites: favourites.filter(r => r !== recipe)
      });
    } else {
      favourites.push(recipe);
      this.setState({
        user_favourites: favourites
      });
    }
  };

  render() {
    return (
      <div className="ContentWrapper">
        <h1 className="title">Thrift Meal Planner</h1>
        <Tabs
          defaultActiveKey="1"
          style={{ textAlign: "center", width: "100%" }}
        >
          <TabPane tab="WEEK PLAN" key="1">
            <WeekPlan
              user_weekplan={this.state.user_weekplan}
              user_favourites={this.state.user_favourites}
            />
          </TabPane>
          <TabPane tab="RECIPES" key="2">
            <Recipes addRemoveFav={this.addRemoveFav} />
          </TabPane>
          <TabPane tab="GROCERY LIST" key="3">
            <GroceryList
              user_weekplan={this.state.user_weekplan}
              user_favourites={this.state.user_favourites}
            />
          </TabPane>
          <TabPane tab="FAVOURITES" key="4">
            <Favourites
              user_favourites={this.state.user_favourites}
              addRemoveFav={this.addRemoveFav}
            />
          </TabPane>
          <TabPane tab="PREFERENCE" key="5">
            <Preferences user_preferences={this.state.user_preferences} />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
