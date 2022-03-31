import * as yup from "yup";
import { PizzaSizes, Toppings } from "./types";

const schema = yup
  .object({
    // Pizza Selection
    pizzaSize: yup
      .mixed<PizzaSizes>()
      .oneOf(Object.values(PizzaSizes))
      .required(),
    toppings: yup.array(
      yup.mixed<Toppings>().oneOf(Object.values(Toppings)).nullable()
    ),
    // Customer Information
    fullName: yup.string().required(),
    streetName: yup.string().required(),
    houseNumber: yup.string().required(),
    postalCode: yup.string().required(),
    city: yup.string().required(),
    phoneNumber: yup.string().required(),

    // Payment Information
    cardNumber: yup.string().required(),
    expirationDate: yup.string().required(),
    cvc: yup.string().required(),
  })
  .required();

export default schema;
