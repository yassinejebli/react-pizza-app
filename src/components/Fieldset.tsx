import styled from "@emotion/styled";
import React from "react";
import { space, SpaceProps } from "styled-system";

type FieldsetProps = {
  title: string;
  children: React.ReactNode;
} & SpaceProps;

export default function Fieldset({ title, children, ...props }: FieldsetProps) {
  return (
    <StyledFieldset {...props}>
      <legend>{title}</legend>
      {children}
    </StyledFieldset>
  );
}

const StyledFieldset = styled.fieldset`
  border: 1px solid rgb(167 209 237);
  ${space}
`;
