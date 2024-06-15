import React from "react";
import MealItem from "./mealsitems";

const MealsGrid = ({ meals }) => {
  return (
    <div className="flex flex-wrap -m-4">
      {meals.map((meal) => (
        <li key={meal.slug} className="list-none">
          <MealItem {...meal} />
        </li>
      ))}
    </div>
  );
};

export default MealsGrid;
