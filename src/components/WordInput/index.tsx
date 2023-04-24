import { LetterInput, WordContainer } from "./wordInput.styles";

const WordInput = ({ word, guessedLetters, hasLost }: WordInputProps) => {
  return (
    <WordContainer>
      {word.split("").map((letter, i) => (
        <LetterInput key={letter + i} state={guessedLetters[letter]?.state}>
          {(hasLost || guessedLetters[letter]) && letter}
        </LetterInput>
      ))}
    </WordContainer>
  );
};

export default WordInput;
