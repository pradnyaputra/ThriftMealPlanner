import React, {Component} from "react";
// import MealCard from "../MealCard/MealCard";
import {Card, Popover} from "antd";
import {PlusCircleOutlined} from "@ant-design/icons";
import {MinusCircleOutlined} from "@ant-design/icons";
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
    this.setState({visible});

  };
  handleVisibleChange2 = visible2 => {
    this.setState({visible2});
  };

  render() {
    return (
        <div className="WeekPlan-Wrapper">
          <div className="schedule">
            <div className="column">
              Sunday
              <div>
                {this.state.temp_sun.map(recipe => (
                    <Card key={recipe.id} style={{marginBottom: "10px"}}>
                      <p>{recipe.title}</p>
					  <MinusCircleOutlined 
                        onClick={() => {
                            let arr = this.state.temp_sun;
                            let a = arr.indexOf(recipe.title);
                            arr.splice(a,1);
                            this.setState({temp_sun:arr})
                        }}
					/>
                    </Card>
                ))}
              </div>
              <Popover
                  placement="right"
                  content={this.props.user_favourites.map(recipe => (
                      <p key={recipe.id} onClick={() => {
                        let arr = this.state.temp_sun;
                        arr.push(recipe);
                        this.setState({temp_sun: arr, visible_sun: false})
                      }}
                         style={{cursor: "pointer"}}>{recipe.title}</p>
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
                        this.setState({visible_sun: true})
                      } else {
                        this.setState({visible_sun: false})
                      }
                    }}
                />
              </Popover>
            </div>

            <div className="column">
              Monday
              <div>
                {this.state.temp_mon.map(recipe => (
                    <Card key={recipe.id} style={{marginBottom: "10px"}}>
                      <p>{recipe.title}</p>
					  <MinusCircleOutlined 
                    onClick={() => {
						let arr = this.state.temp_mon;
						let a = arr.indexOf(recipe.title);
                        arr.splice(a,1);
                        this.setState({temp_mon:arr})                   
                    }}
					/>
                    </Card>
                ))}
              </div>
              <Popover
                  placement="right"
                  content={this.props.user_favourites.map(recipe => (
                      <p key={recipe.id} onClick={() => {
                        let arr = this.state.temp_mon;
                        arr.push(recipe);
                        this.setState({temp_mon: arr, visible_mon: false})
                      }}
                         style={{cursor: "pointer"}}>{recipe.title}</p>
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
                        this.setState({visible_mon: true})
                      } else {
                        this.setState({visible_mon: false})
                      }
                    }}
                />
              </Popover>
            </div>

            <div className="column">
              Tuesday
              <div>
                {this.state.temp_tues.map(recipe => (
                    <Card key={recipe.id} style={{marginBottom: "10px"}}>
                      <p>{recipe.title}</p>
					  <MinusCircleOutlined 
                    onClick={() => {
						let arr = this.state.temp_tues;
						let a = arr.indexOf(recipe.title);
                        arr.splice(a,1);
                        this.setState({temp_tues:arr})                   
                    }}
					/>
                    </Card>
                ))}
              </div>
              <Popover
                  placement="right"
                  content={this.props.user_favourites.map(recipe => (
                      <p key={recipe.id} onClick={() => {
                        let arr = this.state.temp_tues;
                        arr.push(recipe);
                        this.setState({temp_tues: arr, visible_tues: false})
                      }}
                         style={{cursor: "pointer"}}>{recipe.title}</p>
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
                        this.setState({visible_tues: true})
                      } else {
                        this.setState({visible_tues: false})
                      }
                    }}
                />
              </Popover>
            </div>

            <div className="column">
              Wednesday
              <div>
                {this.state.temp_wed.map(recipe => (
                    <Card key={recipe.id} style={{marginBottom: "10px"}}>
                      <p>{recipe.title}</p>
					  <MinusCircleOutlined 
                    onClick={() => {
						let arr = this.state.temp_wed;
						let a = arr.indexOf(recipe.title);
                        arr.splice(a,1);
                        this.setState({temp_wed:arr})                   
                    }}
					/>
                    </Card>
                ))}
              </div>
              <Popover
                  placement="right"
                  content={this.props.user_favourites.map(recipe => (
                      <p key={recipe.id} onClick={() => {
                        let arr = this.state.temp_wed;
                        arr.push(recipe);
                        this.setState({temp_wed: arr, visible_wed: false})
                      }}
                         style={{cursor: "pointer"}}>{recipe.title}</p>
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
                        this.setState({visible_wed: true})
                      } else {
                        this.setState({visible_wed: false})
                      }
                    }}
                />
              </Popover>
            </div>

            <div className="column">
              Thursday
              <div>
                {this.state.temp_thurs.map(recipe => (
                    <Card key={recipe.id} style={{marginBottom: "10px"}}>
                      <p>{recipe.title}</p>
					  <MinusCircleOutlined 
                    onClick={() => {
						let arr = this.state.temp_thurs;
						let a = arr.indexOf(recipe.title);
                        arr.splice(a,1);
                        this.setState({temp_thurs:arr})                   
                    }}
					/>
                    </Card>
                ))}
              </div>
              <Popover
                  placement="right"
                  content={this.props.user_favourites.map(recipe => (
                      <p key={recipe.id} onClick={() => {
                        let arr = this.state.temp_thurs;
                        arr.push(recipe);
                        this.setState({temp_thurs: arr, visible_thurs: false})
                      }}
                         style={{cursor: "pointer"}}>{recipe.title}</p>
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
                        this.setState({visible_thurs: true})
                      } else {
                        this.setState({visible_thurs: false})
                      }
                    }}
                />
              </Popover>
            </div>

            <div className="column">
              Friday
              <div>
                {this.state.temp_fri.map(recipe => (
                    <Card key={recipe.id} style={{marginBottom: "10px"}}>
                      <p>{recipe.title}</p>
					  <MinusCircleOutlined 
                    onClick={() => {
						let arr = this.state.temp_fri;
						let a = arr.indexOf(recipe.title);
                        arr.splice(a,1);
                        this.setState({temp_fri:arr})                   
                    }}
					/>
                    </Card>
                ))}
              </div>
              <Popover
                  placement="right"
                  content={this.props.user_favourites.map(recipe => (
                      <p key={recipe.id} onClick={() => {
                        let arr = this.state.temp_fri;
                        arr.push(recipe);
                        this.setState({temp_fri: arr, visible_fri: false})
                      }}
                         style={{cursor: "pointer"}}>{recipe.title}</p>
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
                        this.setState({visible_fri: true})
                      } else {
                        this.setState({visible_fri: false})
                      }
                    }}
                />
              </Popover>
            </div>

            <div className="column">
              Saturday
              <div>
                {this.state.temp_sat.map(recipe => (
                    <Card key={recipe.id} style={{marginBottom: "10px"}}>
                      <p>{recipe.title}</p>
					  <MinusCircleOutlined 
                    onClick={() => {
						let arr = this.state.temp_sat;
						let a = arr.indexOf(recipe.title);
                        arr.splice(a,1);
                        this.setState({temp_sat:arr})                   
                    }}
					/>
                    </Card>
                ))}
              </div>
              <Popover
                  placement="right"
                  content={this.props.user_favourites.map(recipe => (
                      <p key={recipe.id} onClick={() => {
                        let arr = this.state.temp_sat;
                        arr.push(recipe);
                        this.setState({temp_sat: arr, visible_sat: false})
                      }}
                         style={{cursor: "pointer"}}>{recipe.title}</p>
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
                        this.setState({visible_sat: true})
                      } else {
                        this.setState({visible_sat: false})
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
