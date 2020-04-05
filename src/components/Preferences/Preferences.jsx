import React, { Component } from 'react'
import { Checkbox, Radio, Input } from 'antd'
import './Preferences.scss'
export default class Preferences extends Component {

  constructor() {
    super();
    this.state = {
      user_diet: '',
      user_food_restrictions: [],
    }
  }

  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };

    const options = [
      { label: 'Shellfish', value: 'Shellfish' },
      { label: 'Peanuts', value: 'Peanuts' },
    ];

    return (
      <div>
        <h1>Diets</h1>
        <Radio.Group onChange={this.props.dietUpdate} value={this.props.user_diet} defaultValue={''}>
          <Radio style={radioStyle} value={''} >
            No Diet
          </Radio>
          <Radio style={radioStyle} value={'Gluten Free'}>
            Gluten Free
          </Radio>
          <Radio style={radioStyle} value={'Ketogenic'}>
            Ketogenic
          </Radio>
          <Radio style={radioStyle} value={'Vegetarian'}>
            Vegetarian
          </Radio>
          <Radio style={radioStyle} value={'Lacto-Vegetarian'}>
            Lacto-Vegetarian
          </Radio>
          <Radio style={radioStyle} value={'Ovo-Vegetarian'}>
            Ovo-Vegetarian
          </Radio>
          <Radio style={radioStyle} value={'Vegan'}>
            Vegan
          </Radio>
          <Radio style={radioStyle} value={'Pescetarian'}>
            Pescetarian
          </Radio>
          <Radio style={radioStyle} value={'Paleo'}>
            Paleo
          </Radio>
          <Radio style={radioStyle} value={'Primal'}>
            Primal
          </Radio>
          <Radio style={radioStyle} value={'Whole30'}>
            Whole30
          </Radio>
        </Radio.Group>
        <h1>Food Restrictions</h1>
        <Checkbox.Group options={options}  onChange={this.props.foodPrefUpdate} />
      </div>
    )
  }
}
