import React, { Component } from "react";
// import MealCard from "../MealCard/MealCard";
import { Card } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import "./WeekPlan.scss";
export default class WeekPlan extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }

  render() {
    return (
      <div className="WeekPlan-Wrapper">
        <div className="schedule">
          <div className="column">
            Sunday
            <div>
              {this.state.show &&
                this.props.user_favourites.map(recipe => (
                  <Card key={recipe.id} style={{ marginBottom: "10px" }}>
                    <p>{recipe.title}</p>
                  </Card>
                ))}
            </div>
            <PlusCircleOutlined
              key="plus"
              onClick={() => this.setState({ show: true })}
            />
          </div>
          <div className="column">
            Monday
            <div />
            <PlusCircleOutlined key="plus" />
          </div>
          <div className="column">
            Tuesday
            <div />
            <PlusCircleOutlined key="plus" />
          </div>
          <div className="column">
            Wednesday
            <div />
            <PlusCircleOutlined key="plus" />
          </div>
          <div className="column">
            Thursday>
            <div />
            <PlusCircleOutlined key="plus" />
          </div>
          <div className="column">
            Friday
            <div />
            <PlusCircleOutlined key="plus" />
          </div>
          <div className="column">
            Saturday
            <div />
            <PlusCircleOutlined key="plus" />
          </div>
        </div>
      </div>
    );
  }
}
