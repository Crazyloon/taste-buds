import React from "react";
import { Backdrop } from "./Backdrop";
import { Rating } from "./Rating";

const showPopover = ({name}) => {

}

export const MealCard = ({ meal }) => {
  return (
    <div title={meal.name} className={`meal-card ${meal.selected ? 'selected' : ''}`}>
      <header className="meal-header">
        <span className="meal-title">{meal.name}</span>{" "}
        <Rating rating={meal.rating} />
      </header>
      <Backdrop
        mainImage={meal.mainImage}
        description={meal.description}
        name={meal.name}
      />
      <footer className="meal-footer">
        <small>Cuisine: {meal.cuisine}</small>
      </footer>
    </div>
  );
};
