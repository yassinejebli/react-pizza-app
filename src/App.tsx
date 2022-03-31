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
import schema from "./schema";
import PizzaSizeSelect from "./components/PizzaSizeSelect";
import Checkbox from "./components/Checkbox";
import { formatPrice } from "./helpers";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<OrderType>({
    defaultValues: {
      pizzaSize: PizzaSizes.small,
      toppings: [],
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: OrderType) => {
    console.log({ data, errors, isValid });
  };

  return (
    <>
      <Header total={0} />
      <Main>
        {/* Maybe it's better to split the form into 3 separate files/pages: PizzaSelectionForm, CustomerInformationForm and PaymentForm, 
        this way we can make maintainability and testing better and easier for the forms  */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Fieldset py={3} title="Pizza Selection">
            <Field label="Pizza size" required htmlFor="pizza_size">
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
            <Field label="Card number" htmlFor="card_number" required>
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

          <Button
            // disabled={!isValid}
            type="submit"
            variant="primary"
            width={160}
            mt={3}
          >
            Order
          </Button>
        </form>
      </Main>
    </>
  );
}

export default App;
