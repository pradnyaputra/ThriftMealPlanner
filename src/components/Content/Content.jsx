import React, { Component } from "react";
import { Tabs } from "antd";
import Recipes from "../Recipes/Recipes"
import WeekPlan from "../WeekPlan/WeekPlan"
import GroceryList from "../GroceryList/GroceryList"
import Favourites from "../Favourites/Favourites"
import Preferences from "../Preferences/Preferences"

import "./Content.scss";

const { TabPane } = Tabs;

export default class Content extends Component {
  constructor() {
    super();
    this.state = {
      user_weekplan: undefined,
      user_favourites: undefined,
      user_preferences: undefined
    };
  }

  render() {
    return (
      <div className="ContentWrapper">
        <h1 className="title">
          Thrift Meal Planner
        </h1>
        <Tabs defaultActiveKey="1" style={{ textAlign: "center", width: "100%"}}>
          <TabPane tab="WEEK PLAN" key="1">
            <WeekPlan user_weekplan={this.state.user_weekplan}/>
          </TabPane>
          <TabPane tab="RECIPES" key="2">
            <Recipes />
          </TabPane>
          <TabPane tab="GROCERY LIST" key="3">
            <GroceryList />
          </TabPane>
          <TabPane tab="FAVOURITES" key="4">
            <Favourites user_favourites={this.state.user_favourites}/>
          </TabPane>
          <TabPane tab="PREFERENCE" key="5">
            <Preferences user_preferences={this.state.user_preferences}/>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
