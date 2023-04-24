import { Key, KeyboardLayout } from "./keyboard.styles";
import { GuessedLetters } from "./types";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

interface KeyboardProps {
  onKeyPress: (letter: string) => void;
  guessedLetters: GuessedLetters;
  isDisabled: boolean;
}

export const Keyboard = ({
  onKeyPress,
  guessedLetters,
  isDisabled,
}: KeyboardProps) => {
  return (
    <KeyboardLayout>
      {letters.map((letter) => (
        <Key
          key={letter}
          onClick={() => !isDisabled && onKeyPress(letter)}
          state={guessedLetters[letter]?.state}
          isDisabled={isDisabled}
        >
          {letter}
        </Key>
      ))}
    </KeyboardLayout>
  );
};
