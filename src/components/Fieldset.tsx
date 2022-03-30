import styled from "@emotion/styled";
import React from "react";

type FieldsetProps = {
  title: string;
};

export default function Fieldset({
  title,
  children,
}: FieldsetProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <StyledFieldset>
      <legend>{title}</legend>
      {children}
    </StyledFieldset>
  );
}

const StyledFieldset = styled.fieldset`
  border: 1px solid rgb(167 209 237);
`;
