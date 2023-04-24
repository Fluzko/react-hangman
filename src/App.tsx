import { useState } from "react";
import Hanger from "./components/Hanger";
import { Keyboard } from "./components/Keyboard";
import { GuessedLetters } from "./components/Keyboard/types";
import StickMan from "./components/StickMan";
import WordInput from "./components/WordInput";
import { getRandomWord } from "./utils";

const getErrors = (guessed: GuessedLetters) =>
  Object.values(guessed).reduce(
    (prev, { state }) => (state === "incorrect" ? prev + 1 : prev),
    0,
  );

function App() {
  const [word, setWord] = useState(getRandomWord());
  const [guessed, setGuessed] = useState<GuessedLetters>({});
  const errors = getErrors(guessed);
  const hasLost = errors === 6;
  const hasWon = word.split("").every((letter) => guessed[letter]);
  const attempsLeft = 6 - errors;

  const restartGame = () => {
    setWord(getRandomWord());
    setGuessed({});
  };

  const handleKeyPress = (key: string) => {
    if (!word.includes(key) && errors < 6) {
      setGuessed((guessed) => ({ ...guessed, [key]: { state: "incorrect" } }));
    } else {
      setGuessed((guessed) => ({ ...guessed, [key]: { state: "correct" } }));
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>HANGMAN!</h1>
      <h2>Attemps left: {attempsLeft}</h2>

      <Hanger>
        <StickMan errors={errors} />
      </Hanger>
      <br />
      <WordInput hasLost={hasLost} word={word} guessedLetters={guessed} />
      <br />
      <Keyboard
        onKeyPress={handleKeyPress}
        guessedLetters={guessed}
        isDisabled={hasLost || hasWon}
      />
      <br />
      <button onClick={restartGame}>Restart game</button>
    </div>
  );
}

export default App;
