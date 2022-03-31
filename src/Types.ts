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

export type PizzaSizeType = {
  name: PizzaSizes;
  price: number;
};

export type ToppingType = {
  name: Toppings;
  price: number;
};

export type OrderType = {
  fullName: string;
  streetName: string;
  houseNumber: string;
  postalCode: string;
  city: string;
  phoneNumber: string;

  pizzaSize: PizzaSizeType;
  toppings: Array<ToppingType>;

  cardNumber: string;
  expirationDate: string;
  cvc: string;
};
