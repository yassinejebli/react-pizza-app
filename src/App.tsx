import { Main } from "./App.css";
import Box from "./components/Box";
import Button from "./components/Button";
import Fieldset from "./components/Fieldset";
import Input from "./components/Input";

function App() {
  return (
    <Main>
      <form onSubmit={() => {}}>
        <Fieldset title="Customer Information">
          <Box mt={2}>
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
