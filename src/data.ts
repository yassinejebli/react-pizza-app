import { PizzaSizeType, ToppingType, PizzaSizes, Toppings } from "./types";

// Normally these data should be fetched from the backend.

export const pizzaSizeData: Array<PizzaSizeType> = [
  {
    name: PizzaSizes.small,
    price: 15,
  },
  {
    name: PizzaSizes.medium,
    price: 20,
  },
  {
    name: PizzaSizes.large,
    price: 25,
  },
];

export const toppingData: Array<ToppingType> = [
  {
    name: Toppings.olives,
    price: 3,
  },
  {
    name: Toppings.pepperoni,
    price: 4,
  },
  {
    name: Toppings.mushrooms,
    price: 2,
  },
  {
    name: Toppings.pepper,
    price: 2,
  },
];
