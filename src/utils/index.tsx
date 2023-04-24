import words from "./words.json";

export const getRandomWord = (): string => {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex].toUpperCase();
};

export const letterStyleByState = {
  correct: { backgroundColor: "green", color: "white" },
  incorrect: { backgroundColor: "red", color: "white" },
};

export const ATTEMPS = 6;
