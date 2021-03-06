import React, { Component } from "react";
import { Tabs } from "antd";
import { getIngredients } from "../../actions/apiQuery";
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
      user_diet: "",
      user_food_restrictions: [],
      ingredients: [],
      sun: [],
      mon: [],
      tues: [],
      wed: [],
      thurs: [],
      fri: [],
      sat: []
    };
  }

  addRemoveFav = recipe => {
    let favourites = this.state.user_favourites;
    let ind = this.state.ingredients;

    if (favourites.includes(recipe)) {
      this.setState({
        user_favourites: favourites.filter(r => r !== recipe)
      });
    } else {
      favourites.push(recipe);
      this.setState({
        user_favourites: favourites
      });

      // getIngredients(recipe.id).then(res => {
      //   console.log(res.data)
      //   ind.concat(res.data.extendedIngredients);
      //   this.setState({
      //     ingredients: res.data.extendedIngredients
      //   }, () => this.state.ingredients)
      // })
    }
  };

  getAllIngredients = async () => {
    let week_days = ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"];
    let ind = [];
    await Promise.all(week_days.map(async day => {
      await Promise.all(
        this.state[day].map(async recipe => {
          const result = await getIngredients(recipe.id);
          ind.push(...result.data.extendedIngredients);
        })
      );
    }))

    console.log(ind)
    this.setState({ ingredients: ind });
    //   for (let i=0;i<this.state[day].length;i++) {

    //     await getIngredients(this.state[day][i].id).then(res => {
    //       ind.push(res.data.extendedIngredients);
    //     })
    //   }
    // })
    // console.log("here",ind)
    // this.setState({ingredients: ind})
  };

  dietUpdate = e => {
    this.setState({
      user_diet: e.target.value
    });

    console.log(this.state.user_diet);
  };

  foodPrefUpdate = checkedValues => {
    console.log("checkbox checked", checkedValues.value);
    this.setState({
      user_food_restrictions: checkedValues
    });
  };

  setDay = (day, val) => {
    this.setState({
      [day]: val
    });
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
              sun={this.state.sun}
              mon={this.state.mon}
              tues={this.state.tues}
              wed={this.state.wed}
              thurs={this.state.thurs}
              fri={this.state.fri}
              sat={this.state.sat}
              setDay={this.setDay}
              getAllIngredients={this.getAllIngredients}
            />
          </TabPane>
          <TabPane tab="RECIPES" key="2">
            <Recipes
              addRemoveFav={this.addRemoveFav}
              user_diet={this.state.user_diet}
              user_food_restrictions={this.state.user_food_restrictions}
            />
          </TabPane>
          <TabPane tab="GROCERY LIST" key="3">
            <GroceryList
              ingredients={this.state.ingredients}
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
            <Preferences
              user_diet={this.state.user_diet}
              user_food_restrictions={this.state.user_food_restrictions}
              dietUpdate={this.dietUpdate}
              foodPrefUpdate={this.foodPrefUpdate}
            />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
