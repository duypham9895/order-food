import React from "react";

import MealItem from "./MealItem";

const MealItems = ({ meals, isLoading, error }) => {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <ul>
      {meals.map(({ id, name, description, price }) => (
        <MealItem
          key={id}
          id={id}
          name={name}
          description={description}
          price={price}
        />
      ))}
    </ul>
  );
};

export default MealItems;
