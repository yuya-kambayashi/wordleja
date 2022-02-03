import React, { useState } from "react";
import { LetterState } from "./Keyboard";

type Props = {
  answer: string;
  onSetAnswer: (answer: string) => void;
  state: LetterState;
  letter: string;
};

const LetterButtib: React.FC<Props> = ({
  answer,
  onSetAnswer,
  state,
  letter
}) => {
  const handleClick = (letter: string) => {
    onSetAnswer(answer + letter);
  };
  return (
    <>
      <div>
        {state === "exactMatch" && (
          <button
            onClick={() => handleClick(letter)}
            style={{ backgroundColor: "#6AAA64" }}
            disabled={answer.length > 4}
          >
            {letter}
          </button>
        )}
        {state === "partialMatch" && (
          <button
            onClick={() => handleClick(letter)}
            style={{ backgroundColor: "#C9B458" }}
            disabled={answer.length > 4}
          >
            {letter}
          </button>
        )}
        {state === "used" && (
          <button
            onClick={() => handleClick(letter)}
            style={{ backgroundColor: "#787C7E" }}
            disabled={answer.length > 4}
          >
            {letter}
          </button>
        )}
        {state === "unused" && (
          <button
            onClick={() => handleClick(letter)}
            style={{ backgroundColor: "#D3D6DA" }}
            disabled={answer.length > 4}
          >
            {letter}
          </button>
        )}
      </div>
    </>
  );
};

export default LetterButtib;
