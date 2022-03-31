import * as yup from "yup";
import { postalCode, expirationDate, cvv, number } from "card-validator";
import { PizzaSizes, Toppings } from "./types";

const schema = yup
  .object({
    // Pizza Selection
    pizzaSize: yup
      .mixed<PizzaSizes>()
      .oneOf(Object.values(PizzaSizes))
      .required()
      .label("Pizza size"),
    toppings: yup
      .array(yup.mixed<Toppings>().oneOf(Object.values(Toppings)))
      .label("Toppings"),

    // Customer Information
    fullName: yup.string().required().label("Full name"),
    streetName: yup.string().required().label("Street name"),
    houseNumber: yup.string().required().label("House number"),
    postalCode: yup
      .string()
      .test(
        "test-postal-code",
        "Postal code is invalid",
        (value) => postalCode(value).isValid
      )
      .required()
      .label("Postal code"),
    city: yup.string().required().label("City"),
    phoneNumber: yup
      .string()
      .matches(/(\(?([\d \-)–+/(]+){6,}\)?([ .\-–/]?)([\d]+))/, {
        message: "Please enter a valid phone number.",
        excludeEmptyString: false,
      })
      .required()
      .label("Phone number"),

    // Payment Information
    cardNumber: yup
      .string()
      .test(
        "test-number",
        "Card number is invalid",
        (value) => number(value).isValid
      )
      .required()
      .label("Card number"),
    expirationDate: yup
      .string()
      .test(
        "test-expiration-date",
        "Expiration date is invalid",
        (value) => expirationDate(value).isValid
      )
      .required()
      .label("Expiration date"),
    cvc: yup
      .string()
      .test("test-cvc", "CVC is invalid", (value) => cvv(value).isValid)
      .required()
      .label("CVC"),
  })
  .required();

export default schema;
