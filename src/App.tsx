import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Main } from "./App.css";
import Box from "./components/Box";
import Button from "./components/Button";
import Field from "./components/Field";
import Fieldset from "./components/Fieldset";
import Header from "./components/Header";
import Input from "./components/Input";
import Select from "./components/Select";
import { pizzaSizeData, toppingData } from "./data";
import { OrderType } from "./types";
import schema from "./schema";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderType>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: OrderType) => console.log(data);

  console.log({ errors });
  return (
    <>
      <Header total={0} />
      <Main>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Fieldset py={3} title="Pizza Selection">
            <Field label="Pizza size" required htmlFor="pizza_size">
              <Select id="pizza_size" {...register("pizzaSize")}>
                {pizzaSizeData.map((pizzaSize) => (
                  <option key={pizzaSize.name} value={pizzaSize.name}>
                    {pizzaSize.name} ${pizzaSize.price}
                  </option>
                ))}
              </Select>
            </Field>
            <Field mt={3} label="Toppings">
              {toppingData.map((topping) => (
                <Box key={topping.name} mt={1} flexDirection="row">
                  <label htmlFor={`topping-${topping.name}`}>
                    {topping.name}
                  </label>
                  <input
                    {...register("toppings")}
                    id={`topping-${topping.name}`}
                    type="checkbox"
                    value={topping.name}
                  />
                </Box>
              ))}
            </Field>
          </Fieldset>

          <Fieldset py={3} mt={3} title="Customer Information">
            <Field label="Full name" htmlFor="full_name" required>
              <Input
                id="full_name"
                {...register("fullName")}
                placeholder="Enter your full name"
              />
            </Field>
            <Field mt={3} label="Street name" htmlFor="street_name" required>
              <Input
                id="street_name"
                {...register("streetName")}
                placeholder="Enter your street name"
              />
            </Field>
            <Field mt={3} label="House number" htmlFor="house_number" required>
              <Input
                id="house_number"
                {...register("houseNumber")}
                placeholder="Enter your house number"
              />
            </Field>
            <Field mt={3} label="Postal code" htmlFor="postal_code" required>
              <Input
                id="postal_code"
                {...register("postalCode")}
                placeholder="Enter your postal code"
              />
            </Field>
            <Field mt={3} label="City" htmlFor="city" required>
              <Input
                id="city"
                {...register("city")}
                placeholder="Enter your city"
              />
            </Field>
            <Field mt={3} label="Phone number" htmlFor="phone_number" required>
              <Input
                id="phone_number"
                {...register("phoneNumber")}
                placeholder="Enter your phone number"
              />
            </Field>
          </Fieldset>

          <Fieldset py={3} mt={3} title="Payment Information">
            <Field mt={3} label="Card number" htmlFor="card_number" required>
              <Input
                id="card_number"
                {...register("cardNumber")}
                placeholder="1234 1234 1234 1234"
              />
            </Field>
            <Field
              mt={3}
              label="Expiration date"
              htmlFor="expiration_date"
              required
            >
              <Input
                id="expiration_date"
                {...register("expirationDate")}
                placeholder="MM / YY"
              />
            </Field>
            <Field mt={3} label="CVC" htmlFor="cvc" required>
              <Input id="cvc" {...register("cvc")} placeholder="CVC" />
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
