import styled from "@emotion/styled";
import {
  space,
  background,
  flexDirection,
  alignItems,
  FlexDirectionProps,
  SpaceProps,
  BackgroundProps,
  AlignItemsProps,
} from "styled-system";

export default styled.div<
  FlexDirectionProps & AlignItemsProps & SpaceProps & BackgroundProps
>`
  display: flex;
  flex-direction: column;
  ${alignItems}
  ${flexDirection}
  ${space}
  ${background}
`;
