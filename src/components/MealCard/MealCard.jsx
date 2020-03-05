import React from "react";
import { Card } from "antd";
import "./MealCard.scss";

const { Meta } = Card;

export default function MealCard(props) {
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt={props.recipe.title}
          src={`https://spoonacular.com/recipeImages/${props.recipe.image}`}
          className="meal-image"
        />
      }
    >
      <Meta
        title={props.recipe.title}
        description={`Ready in ${props.recipe.readyInMinutes} Minutes`}
      />
    </Card>
  );
}
