import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  console.log(guess);
  return (
    <p class="guess">
      {range(5).map((num) => (
        <span key={num} class="cell">
          {guess ? guess[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
