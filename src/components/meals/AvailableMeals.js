import React, { useEffect, useState } from "react";

import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import useHttp from "../../hooks/use-http";
import MealItems from "./MealItems";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  const { sendRequest: fetchMeals, isLoading, error } = useHttp();

  useEffect(() => {
    const requestConfig = {
      url: "https://react-complete-guilde-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json",
    };
    const transformTasks = (tasks) => {
      const mappedMeals = Object.entries(tasks).map(
        ([, { id, name, description, price }]) => ({
          id,
          name,
          description,
          price,
        })
      );
      setMeals(mappedMeals);
    };
    fetchMeals(requestConfig, transformTasks);
  }, [fetchMeals]);

  return (
    <section className={classes.meals}>
      <Card>
        <MealItems meals={meals} isLoading={isLoading} error={error} />
      </Card>
    </section>
  );
};

export default AvailableMeals;
