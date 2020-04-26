import React from "react";

import classes from "./Burger.module.css";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients).map(
    (ingredientsKey) => {
      return [...Array(props.ingredients[ingredientsKey])].map((_, i) => {
        return (
          <BurgerIngredients key={ingredientsKey + i} type={ingredientsKey} />
        );
      });
    }
  );
  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default burger;
