import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Banner from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameOver, setGameOver] = React.useState(false);

  function handleSubmitGuess(tentativeGuess) {
    setGuesses((prevGuesses) => {
      return [...prevGuesses, tentativeGuess];
    });
    if (guesses.length === 6) {
      setGameOver(true);
      return;
    }
    if (tentativeGuess === answer) {
      setGameOver(true);
      return;
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} gameOver={gameOver} />
      {gameOver && <Banner guesses={guesses} answer={answer} />}
    </>
  );
}

export default Game;
