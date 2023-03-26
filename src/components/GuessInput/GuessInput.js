import React from "react";

function GuessInput({ handleSubmitGuess, gameOver }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        // disabled={!gameOver}
        required
        minLength={5} // Works only if you pressed shift key
        maxLength={5}
        pattern="[a-zA-Z]{5}" // To fix the above cap issue
        title="5 letter word"
        value={tentativeGuess}
        onChange={(event) => {
          const nextGuess = event.target.value;
          setTentativeGuess(nextGuess.toUpperCase());
        }}
        id="guess-input"
        type="text"
      />
    </form>
  );
}

export default GuessInput;
