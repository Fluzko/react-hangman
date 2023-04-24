import { letterStyleByState } from "../../utils";
import styled from "styled-components";
import { LetterState } from "../Keyboard/types";

export const WordContainer = styled.div`
  height: 2em;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 1em;
`;

export const LetterInput = styled.div<{ state: LetterState }>`
  border-bottom: 1px solid black;
  text-align: center;
  font-size: 2em;
  width: 1em;
  border: ${({ state }) => letterStyleByState[state] && "1px solid black"};
  background-color: ${({ state }) =>
    letterStyleByState[state]?.backgroundColor};
  color: ${({ state }) => letterStyleByState[state]?.color};
`;
