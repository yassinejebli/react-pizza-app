import { Main } from "./App.css";
import Button from "./components/Button";
import Field from "./components/Field";
import Fieldset from "./components/Fieldset";
import Input from "./components/Input";
import Select from "./components/Select";
import { pizzaSizeData, toppingData } from "./data";

function App() {
  return (
    <Main>
      <form onSubmit={() => {}}>
        <Fieldset py={3} title="Pizza Selection">
          <Field label="Pizza size" required htmlFor="pizza_size">
            <Select id="pizza_size">
              {pizzaSizeData.map((pizzaSize) => (
                <option key={pizzaSize.name} value={pizzaSize.name}>
                  {pizzaSize.name} ${pizzaSize.price}
                </option>
              ))}
            </Select>
          </Field>
          <Field mt={3} label="Toppings">
            {toppingData.map((topping) => (
              <>
                <label htmlFor={`topping-${topping.name}`}>
                  {topping.name}
                </label>
                <input
                  id={`topping-${topping.name}`}
                  type="checkbox"
                  key={topping.name}
                  value={topping.name}
                />
              </>
            ))}
          </Field>
        </Fieldset>

        <Fieldset py={3} mt={3} title="Customer Information">
          <Field label="Full name" htmlFor="full_name" required>
            <Input id="full_name" placeholder="Enter your name" />
          </Field>
          <Field mt={3} label="Street name" htmlFor="street_name" required>
            <Input id="street_name" placeholder="Enter your street name" />
          </Field>
          <Field mt={3} label="House number" htmlFor="house_number" required>
            <Input id="house_number" placeholder="Enter your house number" />
          </Field>
          <Field mt={3} label="Postal code" htmlFor="postal_code" required>
            <Input id="postal_code" placeholder="Enter your postal code" />
          </Field>
          <Field mt={3} label="City" htmlFor="city" required>
            <Input id="city" placeholder="Enter your city" />
          </Field>
          <Field mt={3} label="Phone number" htmlFor="phone_number" required>
            <Input id="phone_number" placeholder="Enter your phone number" />
          </Field>
        </Fieldset>

        <Fieldset py={3} mt={3} title="Payment Information">
          <Field mt={3} label="Card number" htmlFor="card_number" required>
            <Input id="card_number" placeholder="1234 1234 1234 1234" />
          </Field>
          <Field
            mt={3}
            label="Expiration date"
            htmlFor="expiration_date"
            required
          >
            <Input id="expiration_date" placeholder="MM / YY" />
          </Field>
          <Field mt={3} label="CVC" htmlFor="cvc" required>
            <Input id="cvc" placeholder="CVC" />
          </Field>
        </Fieldset>
        <Button variant="primary" width={160} mt={3} type="submit">
          Order
        </Button>
      </form>
    </Main>
  );
}

export default App;
