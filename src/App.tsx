import { Main } from "./App.css";
import Box from "./components/Box";
import Button from "./components/Button";
import Fieldset from "./components/Fieldset";
import Input from "./components/Input";
import Select from "./components/Select";
import { pizzaSizeData } from "./data";

function App() {
  return (
    <Main>
      <form onSubmit={() => {}}>
        <Fieldset py={3} title="Pizza Selection">
          <Box>
            <label>Pizza size</label>
            <Select>
              {pizzaSizeData.map((pizzaSize) => (
                <option value={pizzaSize.name}>
                  {pizzaSize.name} ${pizzaSize.price}
                </option>
              ))}
            </Select>
          </Box>
          <Box mt={3}>
            <label>Toppings</label>
          </Box>
        </Fieldset>

        <Fieldset py={3} mt={3} title="Customer Information">
          <Box>
            <label>Full name</label>
            <Input placeholder="Enter your name" />
          </Box>
          <Box mt={3}>
            <label>Street name</label>
            <Input placeholder="Enter your street name" />
          </Box>
          <Box mt={3}>
            <label>House number</label>
            <Input placeholder="Enter your house number" />
          </Box>
          <Box mt={3}>
            <label>Postal code</label>
            <Input placeholder="Enter your postal code" />
          </Box>
          <Box mt={3}>
            <label>City</label>
            <Input placeholder="Enter your city" />
          </Box>
          <Box mt={3}>
            <label>Phone number</label>
            <Input placeholder="Enter your phone number" />
          </Box>
        </Fieldset>
      </form>
    </Main>
  );
}

export default App;
