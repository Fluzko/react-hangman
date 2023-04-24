import styled from "styled-components";
import { StickHorizontal, StickVertical, thick } from "../shared";

export const Floor = styled(StickHorizontal)`
  width: 250px;
`;

export const Mast = styled(StickVertical)`
  height: 400px;
  margin-left: 120px;
`;

export const Roof = styled(StickHorizontal)`
  width: 125px;
  margin-left: 120px;
`;

export const Rope = styled(StickVertical)`
  height: 40px;
  position: absolute;
  left: 235px;
  top: ${thick};
`;

export const HangmanContainer = styled.div`
  position: relative;
`;
