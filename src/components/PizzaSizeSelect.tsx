import React from "react";
import { pizzaSizeData } from "../data";
import { formatPrice } from "../helpers";
import Select from "./Select";

const PizzaSizeSelect = React.forwardRef<HTMLSelectElement>((props, ref) => {
  return (
    <Select ref={ref} {...props}>
      {pizzaSizeData.map((pizzaSize) => (
        <option key={pizzaSize.name} value={pizzaSize.name}>
          {pizzaSize.name} {formatPrice(pizzaSize.price)}
        </option>
      ))}
    </Select>
  );
});

export default PizzaSizeSelect;
