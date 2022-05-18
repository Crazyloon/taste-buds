import React, { useState } from 'react';
import { MealCard } from './MealCard';


export const MealList = ({meals, setMeals}) => {
  const toggleSelection = (meal) => {
    meal.selected = !meal.selected;
    setMeals([...meals]);
  }

  return (
    <div className="meal-list">
      { meals.map((meal, i) => {
        return <div onClick={() => toggleSelection(meal)} className={'card-holder'} style={{'--animation-order': i + 1}} key={i}>
                 <MealCard meal={meal} />
               </div>
        }
      )}
    </div>
  )
}