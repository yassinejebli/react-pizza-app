import { PizzaSizes, Toppings } from "./types";
import { pizzaSizeData, toppingData } from "./data";

export function formatPrice(price: number = 0) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export function getToppingsPrice(toppings: Array<Toppings> = []) {
  return toppings.reduce(
    (acc, curr) =>
      acc + (toppingData.find((topping) => topping.name === curr)?.price || 0),
    0
  );
}

export function getPizzaPrice(size: PizzaSizes) {
  return pizzaSizeData.find((pizzaSize) => pizzaSize.name === size)?.price || 0;
}
