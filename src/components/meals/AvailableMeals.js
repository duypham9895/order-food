import React from "react";
import { nanoid } from "nanoid";

import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem";

const DUMMY_MEALS = [
  {
    id: nanoid(),
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: nanoid(),
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: nanoid(),
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: nanoid(),
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const meals = DUMMY_MEALS.map(({ id, name, description, price }) => (
    <MealItem key={id} name={name} description={description} price={price} />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{meals}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
