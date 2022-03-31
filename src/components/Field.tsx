import styled from "@emotion/styled";
import { space, SpaceProps } from "styled-system";
import Box from "./Box";

type FieldProps = {
  label: string;
  htmlFor?: string;
  required?: boolean;
  children: React.ReactNode;
} & SpaceProps;

export default function Field({
  label,
  required,
  htmlFor,
  children,
  ...props
}: FieldProps) {
  return (
    <Wrapper {...props}>
      <label htmlFor={htmlFor}>{label}</label>
      {required && <RequiredIndicator>*</RequiredIndicator>}
      <Box mt={1}>{children}</Box>
    </Wrapper>
  );
}

const RequiredIndicator = styled.span`
  color: red;
`;

const Wrapper = styled.div`
  width: 100%;
  ${space}
`;
