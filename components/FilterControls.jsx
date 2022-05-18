import React from "react";

export const FilterControls = ({onSetFilter, onSetAscending, ascending}) => {
  return (
    <div className="filter-controls">
      <p>Sort:</p>
      <button
        onClick={() => onSetFilter("alphabetical")}
        className="btn btn-accent-outline text-bold"
      >
        Alphabetical
      </button>
      <button
        onClick={() => onSetFilter("raiting")}
        className="btn btn-accent-outline text-bold"
      >
        Raiting
      </button>
      <button
        onClick={() => onSetFilter("cuisine")}
        className="btn btn-accent-outline text-bold"
      >
        Cuisine
      </button>
      <label className="ascending-toggle">
        <span>Ascending</span>
        <input
          onChange={() => onSetAscending(!ascending)}
          type="checkbox"
          value={ascending}
          checked={ascending}
        />
      </label>
    </div>
  );
};
