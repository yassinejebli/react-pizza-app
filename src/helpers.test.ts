import { formatPrice, getPizzaPrice, getToppingsPrice } from "./helpers";
import { PizzaSizes, Toppings } from "./types";

describe("helpers", () => {
  it("formatPrice should return a formatted price with USD symbol", () => {
    expect(formatPrice(10)).toEqual("$10.00");
    expect(formatPrice(0)).toEqual("$0.00");
  });

  it("getPizzaPrice should return the pizza price by pizza size", () => {
    expect(getPizzaPrice(PizzaSizes.small)).toEqual(15);
    expect(getPizzaPrice(PizzaSizes.medium)).toEqual(20);
    expect(getPizzaPrice(PizzaSizes.large)).toEqual(25);
  });

  it("getToppingsPrice should return the pizza price by pizza size", () => {
    expect(getToppingsPrice([Toppings.mushrooms, Toppings.olives])).toEqual(5);
    expect(getToppingsPrice([Toppings.pepper, Toppings.pepperoni])).toEqual(6);
    expect(getToppingsPrice()).toEqual(0);
  });
});
