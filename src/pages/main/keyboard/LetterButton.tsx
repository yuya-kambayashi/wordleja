import React from "react";
import { KeyLetterState } from "./KeyLetterState";
import { Button } from "@mui/material";

type Props = {
  answer: string;
  onSetAnswer: (answer: string) => void;
  state: KeyLetterState;
  letter: string;
};

const LetterButtun: React.FC<Props> = ({
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
          <Button
            onClick={() => handleClick(letter)}
            style={{ backgroundColor: "#6AAA64" }}
            // disabled={answer.length > 4}
          >
            {letter}
          </Button>
        )}
        {state === "partialMatch" && (
          <Button
            onClick={() => handleClick(letter)}
            style={{ backgroundColor: "#C9B458" }}
            // disabled={answer.length > 4}
          >
            {letter}
          </Button>
        )}
        {state === "used" && (
          <Button
            onClick={() => handleClick(letter)}
            style={{ backgroundColor: "#787C7E" }}
            // disabled={answer.length > 4}
          >
            {letter}
          </Button>
        )}
        {state === "unused" && (
          <Button
            onClick={() => handleClick(letter)}
            style={{ backgroundColor: "#D3D6DA" }}
            // disabled={answer.length > 4}
          >
            {letter}
          </Button>
        )}
      </div>
    </>
  );
};

export default LetterButtun;
