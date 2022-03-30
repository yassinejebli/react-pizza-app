import styled from "@emotion/styled";
import { space, background, SpaceProps, BackgroundProps } from "styled-system";

export default styled.div<SpaceProps & BackgroundProps>`
  display: flex;
  flex-direction: column;
  ${space}
  ${background}
`;
