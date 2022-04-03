import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Main } from "./App.css";
import Button from "./components/Button";
import Field from "./components/Field";
import Fieldset from "./components/Fieldset";
import Header from "./components/Header";
import Input from "./components/Input";
import { toppingData } from "./data";
import { OrderType, PizzaSizes } from "./types";
import validationSchema from "./validationSchema";
import PizzaSizeSelect from "./components/PizzaSizeSelect";
import Checkbox from "./components/Checkbox";
import { formatPrice, getPizzaPrice, getToppingsPrice } from "./helpers";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<OrderType>({
    defaultValues: {
      pizzaSize: PizzaSizes.small,
      toppings: [],
    },
    resolver: yupResolver(validationSchema),
  });

  // re-render only when toppings or pizzaSize value change
  const toppingsPrice = getToppingsPrice(watch("toppings"));
  const pizzaPrice = getPizzaPrice(watch("pizzaSize"));

  const total = toppingsPrice + pizzaPrice;

  const onSubmit = (data: OrderType) => {
    console.log({ data });
  };

  return (
    <>
      <Header total={total} />
      <Main>
        {/* Maybe it's better to split the form into 3 separate files/pages (wizard): PizzaSelectionForm, CustomerInformationForm and PaymentForm, 
        this way we can make maintainability and testing better and easier for the forms  */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Fieldset py={3} title="Pizza Selection">
            <Field
              error={errors.pizzaSize?.message}
              label="Pizza size"
              required
              htmlFor="pizza_size"
            >
              <PizzaSizeSelect id="pizza_size" {...register("pizzaSize")} />
            </Field>
            <Field mt={3} label="Toppings">
              {toppingData.map((topping) => (
                <Checkbox
                  key={topping.name}
                  {...register("toppings")}
                  id={`topping-${topping.name}`}
                  label={`${topping.name}`}
                  helperText={formatPrice(topping.price)}
                  value={topping.name}
                />
              ))}
            </Field>
          </Fieldset>

          <Fieldset py={3} mt={3} title="Customer Information">
            <Field
              error={errors.fullName?.message}
              label="Full name"
              htmlFor="full_name"
              required
            >
              <Input
                error={Boolean(errors.fullName)}
                id="full_name"
                {...register("fullName")}
                placeholder="Enter your full name"
              />
            </Field>
            <Field
              error={errors.streetName?.message}
              mt={3}
              label="Street name"
              htmlFor="street_name"
              required
            >
              <Input
                error={Boolean(errors.streetName)}
                id="street_name"
                {...register("streetName")}
                placeholder="Enter your street name"
              />
            </Field>
            <Field
              error={errors.houseNumber?.message}
              mt={3}
              label="House number"
              htmlFor="house_number"
              required
            >
              <Input
                error={Boolean(errors.houseNumber)}
                id="house_number"
                {...register("houseNumber")}
                placeholder="Enter your house number"
              />
            </Field>
            <Field
              error={errors.postalCode?.message}
              mt={3}
              label="Postal code"
              htmlFor="postal_code"
              required
            >
              <Input
                error={Boolean(errors.postalCode)}
                id="postal_code"
                {...register("postalCode")}
                placeholder="Enter your postal code"
              />
            </Field>
            <Field
              error={errors.city?.message}
              mt={3}
              label="City"
              htmlFor="city"
              required
            >
              <Input
                error={Boolean(errors.city)}
                id="city"
                {...register("city")}
                placeholder="Enter your city"
              />
            </Field>
            <Field
              error={errors.phoneNumber?.message}
              mt={3}
              label="Phone number"
              htmlFor="phone_number"
              required
            >
              <Input
                type="tel"
                error={Boolean(errors.phoneNumber)}
                id="phone_number"
                {...register("phoneNumber")}
                placeholder="Enter your phone number"
              />
            </Field>
          </Fieldset>

          <Fieldset py={3} mt={3} title="Payment Information">
            <Field
              error={errors.cardNumber?.message}
              label="Card number"
              htmlFor="card_number"
              required
            >
              <Input
                error={Boolean(errors.cardNumber)}
                id="card_number"
                {...register("cardNumber")}
                placeholder="1234 1234 1234 1234"
              />
            </Field>
            <Field
              error={errors.expirationDate?.message}
              mt={3}
              label="Expiration date"
              htmlFor="expiration_date"
              required
            >
              <Input
                // TODO: should be a masked input
                error={Boolean(errors.expirationDate)}
                id="expiration_date"
                {...register("expirationDate")}
                placeholder="MM / YY"
              />
            </Field>
            <Field
              error={errors.cvc?.message}
              mt={3}
              label="CVC"
              htmlFor="cvc"
              required
            >
              <Input
                error={Boolean(errors.cvc)}
                id="cvc"
                {...register("cvc")}
                placeholder="CVC"
              />
            </Field>
          </Fieldset>

          <Button type="submit" variant="primary" width={160} mt={3}>
            Order
          </Button>
        </form>
      </Main>
    </>
  );
}

export default App;
