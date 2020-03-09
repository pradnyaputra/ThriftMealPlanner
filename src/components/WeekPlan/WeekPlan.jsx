import React, { Component } from "react";
// import MealCard from "../MealCard/MealCard";
import { Card, Popover } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import "./WeekPlan.scss";
export default class WeekPlan extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
			temp: []
    };
  }
	
	  handleVisibleChange = visible => {
    this.setState({ visible });
  };

  render() {
    return (
      <div className="WeekPlan-Wrapper">
        <div className="schedule">
          <div className="column">
            Sunday
            <div>
              {this.state.temp.map(recipe => (
                  <Card key={recipe.id} style={{ marginBottom: "10px" }}>
                    <p>{recipe.title}</p>
                  </Card>
                ))}
            </div>
						      <Popover
										placement="right"
        					content={this.props.user_favourites.map(recipe => (
                    <p key={recipe.id} onClick={() => this.setState({temp: [recipe], visible: false})} style={{ cursor: "pointer"}}>{recipe.title}</p>
                		))}
        title="Choose a meal to add"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
      >
            <PlusCircleOutlined
              key="plus"
              onClick={() => this.setState({ visible: true })}
            />
						</Popover>
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
