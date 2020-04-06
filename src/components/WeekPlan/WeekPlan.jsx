import React, { Component } from "react";
// import MealCard from "../MealCard/MealCard";
import { Card, Popover } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { MinusCircleOutlined } from "@ant-design/icons";
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
      temp_sat: []
    };
  }

  handleVisibleChange = visible => {
    this.setState({ visible });
  };
  handleVisibleChange2 = visible2 => {
    this.setState({ visible2 });
  };

  render() {
    return (
      <div className="WeekPlan-Wrapper">
        <div className="schedule">
          <div className="column">
            Sunday
            <div>
              {this.props.sun.map(recipe => (
                <Card key={recipe.id} style={{ marginBottom: "10px" }}>
                  <p>{recipe.title}</p>
                  <MinusCircleOutlined
                    onClick={() => {
                      let arr = this.props.sun;
                      let a = arr.indexOf(recipe.title);
                      arr.splice(a, 1);
                      this.props.setDay("sun", arr);
                    }}
                  />
                </Card>
              ))}
            </div>
            <Popover
              placement="right"
              content={this.props.user_favourites.map(recipe => (
                <p
                  key={recipe.id}
                  onClick={() => {
                    let arr = this.props.sun;
                    arr.push(recipe);
                    this.setState({ visible_sun: false });
                    this.props.setDay("sun", arr);
                    //
                    this.props.getAllIngredients();
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {recipe.title}
                </p>
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
                    this.setState({ visible_sun: true });
                  } else {
                    this.setState({ visible_sun: false });
                  }
                }}
              />
            </Popover>
          </div>

          <div className="column">
            Monday
            <div>
              {this.props.mon.map(recipe => (
                <Card key={recipe.id} style={{ marginBottom: "10px" }}>
                  <p>{recipe.title}</p>
                  <MinusCircleOutlined
                    onClick={() => {
                      let arr = this.props.mon;
                      let a = arr.indexOf(recipe.title);
                      arr.splice(a, 1);
                      this.props.setDay("mon", arr);
                    }}
                  />
                </Card>
              ))}
            </div>
            <Popover
              placement="right"
              content={this.props.user_favourites.map(recipe => (
                <p
                  key={recipe.id}
                  onClick={() => {
                    let arr = this.props.mon;
                    arr.push(recipe);
                    this.setState({ visible_mon: false });
                    this.props.setDay("mon", arr);
                    //
                    this.props.getAllIngredients();
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {recipe.title}
                </p>
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
                    this.setState({ visible_mon: true });
                  } else {
                    this.setState({ visible_mon: false });
                  }
                }}
              />
            </Popover>
          </div>

          <div className="column">
            Tuesday
            <div>
              {this.props.tues.map(recipe => (
                <Card key={recipe.id} style={{ marginBottom: "10px" }}>
                  <p>{recipe.title}</p>
                  <MinusCircleOutlined
                    onClick={() => {
                      let arr = this.props.tues;
                      let a = arr.indexOf(recipe.title);
                      arr.splice(a, 1);
                      this.props.setDay("tues", arr);
                    }}
                  />
                </Card>
              ))}
            </div>
            <Popover
              placement="right"
              content={this.props.user_favourites.map(recipe => (
                <p
                  key={recipe.id}
                  onClick={() => {
                    let arr = this.props.tues;
                    arr.push(recipe);
                    this.setState({ visible_tues: false });
                    this.props.setDay("tues", arr);
                    //
                    this.props.getAllIngredients();
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {recipe.title}
                </p>
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
                    this.setState({ visible_tues: true });
                  } else {
                    this.setState({ visible_tues: false });
                  }
                }}
              />
            </Popover>
          </div>

          <div className="column">
            Wednesday
            <div>
              {this.props.wed.map(recipe => (
                <Card key={recipe.id} style={{ marginBottom: "10px" }}>
                  <p>{recipe.title}</p>
                  <MinusCircleOutlined
                    onClick={() => {
                      let arr = this.props.wed;
                      let a = arr.indexOf(recipe.title);
                      arr.splice(a, 1);
                      this.props.setDay("wed", arr);
                    }}
                  />
                </Card>
              ))}
            </div>
            <Popover
              placement="right"
              content={this.props.user_favourites.map(recipe => (
                <p
                  key={recipe.id}
                  onClick={() => {
                    let arr = this.props.wed;
                    arr.push(recipe);
                    this.setState({ visible_wed: false });
                    this.props.setDay("wed", arr);
                    //
                    this.props.getAllIngredients();
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {recipe.title}
                </p>
              ))}
              title="Choose a meal to add"
              visible={this.state.visible_wed}
              trigger="hover"
              key="1"
              onVisibleChange={this.handleVisibleChange}
            >
              <PlusCircleOutlined
                key="plus"
                onClick={() => {
                  if (this.state.visible_wed === false) {
                    this.setState({ visible_wed: true });
                  } else {
                    this.setState({ visible_wed: false });
                  }
                }}
              />
            </Popover>
          </div>

          <div className="column">
            Thursday
            <div>
              {this.props.thurs.map(recipe => (
                <Card key={recipe.id} style={{ marginBottom: "10px" }}>
                  <p>{recipe.title}</p>
                  <MinusCircleOutlined
                    onClick={() => {
                      let arr = this.prop.thurs;
                      let a = arr.indexOf(recipe.title);
                      arr.splice(a, 1);
                      this.props.setDay("thurs", arr);
                    }}
                  />
                </Card>
              ))}
            </div>
            <Popover
              placement="right"
              content={this.props.user_favourites.map(recipe => (
                <p
                  key={recipe.id}
                  onClick={() => {
                    let arr = this.props.thurs;
                    arr.push(recipe);
                    this.setState({ visible_thurs: false });
                    this.props.setDay("thurs", arr);
                    //
                    this.props.getAllIngredients();
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {recipe.title}
                </p>
              ))}
              title="Choose a meal to add"
              visible={this.state.visible_thurs}
              trigger="hover"
              key="1"
              onVisibleChange={this.handleVisibleChange}
            >
              <PlusCircleOutlined
                key="plus"
                onClick={() => {
                  if (this.state.visible_thurs === false) {
                    this.setState({ visible_thurs: true });
                  } else {
                    this.setState({ visible_thurs: false });
                  }
                }}
              />
            </Popover>
          </div>

          <div className="column">
            Friday
            <div>
              {this.props.fri.map(recipe => (
                <Card key={recipe.id} style={{ marginBottom: "10px" }}>
                  <p>{recipe.title}</p>
                  <MinusCircleOutlined
                    onClick={() => {
                      let arr = this.props.fri;
                      let a = arr.indexOf(recipe.title);
                      arr.splice(a, 1);
                      this.props.setDay("fri", arr);
                    }}
                  />
                </Card>
              ))}
            </div>
            <Popover
              placement="right"
              content={this.props.user_favourites.map(recipe => (
                <p
                  key={recipe.id}
                  onClick={() => {
                    let arr = this.props.fri;
                    arr.push(recipe);
                    this.setState({ visible_fri: false });
                    this.props.setDay("fri", arr);
                    //
                    this.props.getAllIngredients();
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {recipe.title}
                </p>
              ))}
              title="Choose a meal to add"
              visible={this.state.visible_fri}
              trigger="hover"
              key="1"
              onVisibleChange={this.handleVisibleChange}
            >
              <PlusCircleOutlined
                key="plus"
                onClick={() => {
                  if (this.state.visible_fri === false) {
                    this.setState({ visible_fri: true });
                  } else {
                    this.setState({ visible_fri: false });
                  }
                }}
              />
            </Popover>
          </div>

          <div className="column">
            Saturday
            <div>
              {this.props.sat.map(recipe => (
                <Card key={recipe.id} style={{ marginBottom: "10px" }}>
                  <p>{recipe.title}</p>
                  <MinusCircleOutlined
                    onClick={() => {
                      let arr = this.props.sat;
                      let a = arr.indexOf(recipe.title);
                      arr.splice(a, 1);
                      this.props.setDay("sat", arr);
                    }}
                  />
                </Card>
              ))}
            </div>
            <Popover
              placement="right"
              content={this.props.user_favourites.map(recipe => (
                <p
                  key={recipe.id}
                  onClick={() => {
                    let arr = this.props.sat;
                    arr.push(recipe);
                    this.setState({ visible_sat: false });
                    this.props.setDay("sat", arr);
                    //
                    this.props.getAllIngredients();
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {recipe.title}
                </p>
              ))}
              title="Choose a meal to add"
              visible={this.state.visible_sat}
              trigger="hover"
              key="1"
              onVisibleChange={this.handleVisibleChange}
            >
              <PlusCircleOutlined
                key="plus"
                onClick={() => {
                  if (this.state.visible_sat === false) {
                    this.setState({ visible_sat: true });
                  } else {
                    this.setState({ visible_sat: false });
                  }
                }}
              />
            </Popover>
          </div>
        </div>
      </div>
    );
  }
}
