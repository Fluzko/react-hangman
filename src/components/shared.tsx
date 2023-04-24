import styled from "styled-components";

export const thick = "10px";

export const Stick = styled.div`
  background-color: black;
`;

export const StickVertical = styled(Stick)`
  width: ${thick};
`;

export const StickHorizontal = styled(Stick)`
  height: ${thick};
`;
