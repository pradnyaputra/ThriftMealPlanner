import React, { Component } from 'react'
import {getIngredients} from '../../actions/apiQuery'
import './GroceryList.scss'
export default class GroceryList extends Component {
    
  constructor() {
    super();
    this.state = {
    };
  }
	
  render() {
    return (
      <div>
        Grocery List
				{this.props.ingredients.map(ingredient => {
					console.log(ingredient)
					return (
				<p key={ingredient.id}>{`${ingredient.name} ${ingredient.measures.metric.amount} ${ingredient.measures.metric.unitLong}`}</p>
)})}
      </div>
    )
  }
}
