export type LetterState = "correct" | "incorrect";

export type GuessedLetters = Record<string, { state: LetterState }>;