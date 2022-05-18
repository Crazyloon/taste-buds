import React from "react";

export const Rating = ({rating}) => {
  return (
    <div className="rating">
      <span className={rating < 3 ? "rating-avg-bad" : "rating-avg-good"}>{rating}</span>
      <span className="rating-total">/5</span>
    </div>
  );
};
