import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log({ guess });

    setGuess("");
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5} // Works only if you pressed shift key
        maxLength={5}
        pattern="[a-zA-Z]{5}" // To fix the above cap issue
        title="5 letter word"
        value={guess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
        id="guess-input"
        type="text"
      />
    </form>
  );
}

export default GuessInput;
