import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const result = checkGuess(guess, answer);
  console.log(result);

  return (
    <p className="guess">
      {range(5).map((num) => (
        // <span key={num} className="cell incorrect">
        <span
          key={num}
          className={result ? `${result[num].status} cell` : `cell`}
        >
          {guess ? guess[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
