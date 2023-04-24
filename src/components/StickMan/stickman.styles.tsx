import styled from "styled-components";
import { StickVertical, thick } from "../shared";

export const Head = styled.div`
  height: 50px;
  width: 50px;
  border: ${thick} solid black;
  border-radius: 50%;
  position: absolute;
  left: 205px;
  top: 50px;
`;

export const Body = styled(StickVertical)`
  height: 100px;
  position: absolute;
  left: 235px;
  top: 110px;
`;

export const Leg = styled(StickVertical)`
  height: 50px;
  position: absolute;
`;

export const LegLeft = styled(Leg)`
  transform: rotate(45deg);
  left: 220px;
  top: 200px;
`;

export const LegRight = styled(Leg)`
  transform: rotate(-45deg);
  left: 250px;
  top: 200px;
`;

export const Arm = styled(StickVertical)`
  height: 50px;
  position: absolute;
`;

export const ArmLeft = styled(Arm)`
  transform: rotate(-45deg);
  left: 215px;
  top: 120px;
`;

export const ArmRight = styled(Arm)`
  transform: rotate(45deg);
  left: 255px;
  top: 120px;
`;

export const Empty = styled.div``;
