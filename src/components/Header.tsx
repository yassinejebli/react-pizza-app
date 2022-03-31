import styled from "@emotion/styled";
import { formatPrice } from "../helpers";

type HeaderProps = {
  total: number;
};

export default function Header({ total }: HeaderProps) {
  return (
    <Wrapper>
      <h2>Pizza</h2>
      {formatPrice(total)}
    </Wrapper>
  );
}

const Wrapper = styled.header`
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  background-color: #d7a045;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  box-sizing: border-box;
  box-shadow: -2px 6px 28px 0 #c4c4c4;
`;
