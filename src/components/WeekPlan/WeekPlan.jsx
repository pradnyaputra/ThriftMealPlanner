import React, { Component } from "react";
import "./WeekPlan.scss";
export default class WeekPlan extends Component {
  constructor() {
    super();
    this.state = {
      device: "desktop",
      showErrorModal: false
    };
  }

  render() {
    return (
      <div className="WeekPlan-Wrapper">
        <div className="schedule">
          <div className="column">Sunday</div>
          <div className="column">Monday</div>
          <div className="column">Tuesday</div>
          <div className="column">Wednesday</div>
          <div className="column">Thursday</div>
          <div className="column">Friday</div>
          <div className="column">Saturday</div>
        </div>
      </div>
    );
  }
}
