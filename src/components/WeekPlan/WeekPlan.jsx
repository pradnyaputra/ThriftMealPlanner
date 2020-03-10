import React, { Component } from "react";
// import MealCard from "../MealCard/MealCard";
import { Card, Popover } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import "./WeekPlan.scss";
import MealCard from "../MealCard/MealCard";
export default class WeekPlan extends Component {
  constructor() {
    super();
    this.state = {
      visible_sun: false,
      temp_sun: [],
      visible_mon: false,
      temp_mon: [],
      visible_tues: false,
      temp_tues: [],
      visible_wed: false,
      temp_wed: [],
      visible_thurs: false,
      temp_thurs: [],
      visible_fri: false,
      temp_fri: [],
      visible_sat: false,
      temp_sat: [],
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
              {this.state.temp_sun.map(recipe => (
                  <Card key={recipe.id} style={{ marginBottom: "10px" }}>
                    <p>{recipe.title}</p>
                  </Card>
                ))}
            </div>
            <Popover
              placement="right"
              content={this.props.user_favourites.map(recipe => (
                <p key={recipe.id} onClick={() => {
                    let arr = this.state.temp_sun;
                    arr.push(recipe);
                    this.setState({temp_sun: arr, visible_sun: false})} }
                    style={{ cursor: "pointer"}}>{recipe.title}</p>
              ))}
              title="Choose a meal to add"
              visible={this.state.visible_sun}
              trigger="hover"
              key="1"
              onVisibleChange={this.handleVisibleChange}
              >
              <PlusCircleOutlined
                key="plus"
                onClick={() => {
                    if (this.state.visible_sun === false) {
                      this.setState({ visible_sun: true })
                    } else {
                      this.setState({ visible_sun: false })
                    }
                }}
              />
            </Popover>
          </div>
          <div className="column">
            Monday
            <div>
              {this.state.temp_mon.map(recipe => (
                  <Card key={recipe.id} style={{ marginBottom: "10px" }}>
                    <p>{recipe.title}</p>
                  </Card>
              ))}
            </div>
            <Popover
                placement="right"
                content={this.props.user_favourites.map(recipe => (
                    <p key={recipe.id} onClick={() => {
                      let arr = this.state.temp_mon;
                      arr.push(recipe);
                      this.setState({temp_mon: arr, visible_mon: false})} }
                       style={{ cursor: "pointer"}}>{recipe.title}</p>
                ))}
                title="Choose a meal to add"
                visible={this.state.visible_mon}
                trigger="hover"
                key="1"
                onVisibleChange={this.handleVisibleChange}
            >
              <PlusCircleOutlined
                  key="plus"
                  onClick={() => {
                    if (this.state.visible_mon === false) {
                      this.setState({ visible_mon: true })
                    } else {
                      this.setState({ visible_mon: false })
                    }
                  }}
              />
            </Popover>
          </div>
          <div className="column">
            Tuesday
            <div />
            <div>
              {this.state.temp_tues.map(recipe => (
                  <Card key={recipe.id} style={{ marginBottom: "10px" }}>
                    <p>{recipe.title}</p>
                  </Card>
              ))}
            </div>
            <Popover
                placement="right"
                content={this.props.user_favourites.map(recipe => (
                    <p key={recipe.id} onClick={() => {
                      let arr = this.state.temp_tues;
                      arr.push(recipe);
                      this.setState({temp_tues: arr, visible_tues: false})} }
                       style={{ cursor: "pointer"}}>{recipe.title}</p>
                ))}
                title="Choose a meal to add"
                visible={this.state.visible_tues}
                trigger="hover"
                key="1"
                onVisibleChange={this.handleVisibleChange}
            >
              <PlusCircleOutlined
                  key="plus"
                  onClick={() => {
                    if (this.state.visible_tues === false) {
                      this.setState({ visible_tues: true })
                    } else {
                      this.setState({ visible_tues: false })
                    }
                  }}
              />
            </Popover>
          </div>
          <div className="column">
            Wednesday
            <div />
            <PlusCircleOutlined key="plus" />
          </div>
          <div className="column">
            Thursday
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
