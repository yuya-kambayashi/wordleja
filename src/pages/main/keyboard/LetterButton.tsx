import React from "react";
import { KeyLetterState } from "./KeyLetterState";
import { Button } from "@mui/material";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Button: {
      width: "10px",
      height: "58px",
      fontWeight: "bold",
      borderRadius: "4px",
      cursor: "pointer",
      userSelect: "none",
      flex: "1",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px"
    }
  })
);
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
  const classes = useStyles();

  const handleClick = (letter: string) => {
    onSetAnswer(answer + letter);
  };
  return (
    <>
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
          style={{ backgroundColor: "#D3D6DA", width: "10px" }}
          className={classes.Button}
          // disabled={answer.length > 4}
        >
          {letter}
        </Button>
      )}
    </>
  );
};

export default LetterButtun;
