import Cart from '../UI/Card';
import MealItem from './MealItem/MealItem';

import classes from './AvailableMeals.module.css';

import DUMMY_MEALS from '../../dev-data/dummy-meals.js';

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Cart>
        <ul>{mealsList}</ul>
      </Cart>
    </section>
  );
};

export default AvailableMeals;
