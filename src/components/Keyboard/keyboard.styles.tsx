import styled from "styled-components";
import { letterStyleByState } from "../../utils";
import { LetterState } from "./types";

export const Key = styled.div<{ state: LetterState; isDisabled: boolean }>`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  background-color: ${({ state, isDisabled }) =>
    letterStyleByState[state]?.backgroundColor ||
    (isDisabled && "lightgray") ||
    "white"};
  color: ${({ state }) => letterStyleByState[state]?.color || "black"};
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
`;

export const KeyboardLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 30px);
  gap: 1em;
`;
