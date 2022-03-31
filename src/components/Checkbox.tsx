import React from "react";
import Box from "./Box";

type CheckboxProps = {
  label: string;
  value: string;
} & React.HTMLAttributes<HTMLInputElement>;

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, label, ...props }, ref) => {
    return (
      <Box flexDirection="row">
        <input ref={ref} id={id} type="checkbox" {...props} />
        <label htmlFor={id}>{label}</label>
      </Box>
    );
  }
);

export default Checkbox;
