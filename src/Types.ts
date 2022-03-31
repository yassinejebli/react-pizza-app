export enum PizzaSizes {
  small = "small",
  medium = "medium",
  large = "large",
}

export enum Toppings {
  olives = "olives",
  pepperoni = "pepperoni",
  mushrooms = "mushrooms",
  pepper = "pepper",
}

type PizzaSizeType = {
  name: PizzaSizes;
  price: number;
};

type ToppingType = {
  name: Toppings;
  price: number;
};

export type OrderModel = {
  name: string;
  streetName: string;
  houseNumber: string;
  postalCode: string;
  city: string;
  phoneNumber: string;
  pizzaSize: PizzaSizeType;
  toppings: Array<ToppingType>;
};
