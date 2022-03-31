import styled from "@emotion/styled";
import { space, SpaceProps } from "styled-system";
import Box from "./Box";

type FieldProps = {
  label: string;
  htmlFor?: string;
  required?: boolean;
  children: React.ReactNode;
  error?: string;
} & SpaceProps;

export default function Field({
  label,
  required,
  htmlFor,
  children,
  error,
  ...props
}: FieldProps) {
  return (
    <Wrapper {...props}>
      <label htmlFor={htmlFor}>{label}</label>
      {required && <Red>*</Red>}
      <Box mt={1}>{children}</Box>
      {error && <Red>{error}</Red>}
    </Wrapper>
  );
}

const Red = styled.span`
  color: red;
  font-size: 14px;
  margin-left: 4px;
`;

const Wrapper = styled.div`
  width: 100%;
  ${space}
`;
