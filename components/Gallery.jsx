import React, { useState } from "react";
import { FilterControls } from "./FilterControls";
import { MealList } from "./MealList";
import mealData from "../data/meals.json";
import { sortingFunction } from "../sortingFunction";
import FloatingActionButton from "./FloatingActionButton";

const getMealsSorted = (meals, filter, ascending) => {
  meals.sort((a, b) => {
    switch (filter) {
      case "alphabetical":
        return sortingFunction(a.title, b.title, ascending);

      case "raiting":
        return sortingFunction(a.voteWins, b.voteWins, ascending);

      case "cuisine":
        return sortingFunction(a.cuisine, b.cuisine, ascending);

      default:
        return null;
    }
  });

  return meals;
};

const Gallery = ({ meals }) => {
  const [filter, setFilter] = useState("alphabetical");
  const [ascending, setAscending] = useState(true);
  const [sortedMeals, setMeals] = useState([...getMealsSorted(meals, filter, ascending)]);

  return (
    <div className="gallery">
      <div className="flex flex-justify-center">
        <h1 className="mt-1">Select up to 5 meals below to create a poll!</h1>
      </div>
      <FilterControls
        onSetFilter={setFilter}
        onSetAscending={setAscending}
        ascending={ascending}
      />
      <MealList meals={sortedMeals} setMeals={setMeals} />
      <FloatingActionButton meals={sortedMeals} />
    </div>
  );
};

export default Gallery;
