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
      <div className="GroceryList">
        Grocery List
        <table>
          <thead>
            <tr><th>Ingredient</th><th>Amount</th></tr>
          </thead>
          <tbody>
				{this.props.ingredients.map(ingredient => {
					console.log(ingredient)
					return (
				// <p key={ingredient.id}>{`${ingredient.name} ${ingredient.measures.metric.amount} ${ingredient.measures.metric.unitLong}`}</p>
                        <tr key={ingredient.id}><td>{ingredient.name}</td><td>{`${ingredient.measures.metric.amount} ${ingredient.measures.metric.unitLong}`}</td></tr>
)})}
          </tbody>
        </table>
      </div>
    )
  }
}
