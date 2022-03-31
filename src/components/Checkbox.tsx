import styled from "@emotion/styled";
import React from "react";
import Box from "./Box";

type CheckboxProps = {
  label: string;
  value: string;
  helperText?: string;
} & React.HTMLAttributes<HTMLInputElement>;

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, label, helperText, ...props }, ref) => {
    return (
      <Wrapper>
        <Box flexDirection="row">
          <input ref={ref} id={id} type="checkbox" {...props} />
          <label htmlFor={id}>{label}</label>
        </Box>
        {helperText && <small>{helperText}</small>}
      </Wrapper>
    );
  }
);

const Wrapper = styled.div`
  label {
    text-transform: capitalize;
  }
  small {
    color: gray;
    padding-left: 18px;
  }
`;

export default Checkbox;
