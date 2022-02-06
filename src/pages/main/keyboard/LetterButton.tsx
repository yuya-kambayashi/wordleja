import React from "react";
import { KeyLetterState } from "./KeyLetterState";
import { Button, Typography } from "@mui/material";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { AnswerLetterState } from "../answer/AnswerLetterState";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Button: {
      height: "75px",
      borderRadius: "4px",
      cursor: "pointer",
      userSelect: "none",
      flex: "1",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    Letter: {
      color: "#000000",
      fontWeight: "bold"
    }
  })
);
type Props = {
  answer: string;
  onSetAnswer: (answer: string) => void;
  state: KeyLetterState;
  letter: string;
  answerLetterStates: AnswerLetterState[];
  onSetAnswerLetterStates: (newAnswerLetterStates: AnswerLetterState[]) => void;
};

const LetterButtun: React.FC<Props> = ({
  answer,
  onSetAnswer,
  state,
  letter,
  answerLetterStates,
  onSetAnswerLetterStates
}) => {
  const classes = useStyles();

  // 押下されたキーを「uncheck」状態に変更します
  const setAnswerLetterUncheck = () => {
    let checkedAnswerLetterStates = answerLetterStates.slice();

    checkedAnswerLetterStates[answer.length] = "uncheck";

    onSetAnswerLetterStates(checkedAnswerLetterStates);
  };

  const handleClick = (letter: string) => {
    onSetAnswer(answer + letter);

    setAnswerLetterUncheck();
  };

  return (
    <>
      {state === "exactMatch" && (
        <Button
          onClick={() => handleClick(letter)}
          style={{ backgroundColor: "#6AAA64" }}
          // disabled={answer.length > 4}
        >
          <Typography className={classes.Letter}>{letter}</Typography>
        </Button>
      )}
      {state === "partialMatch" && (
        <Button
          onClick={() => handleClick(letter)}
          style={{ backgroundColor: "#C9B458" }}
          // disabled={answer.length > 4}
        >
          <Typography className={classes.Letter}>{letter}</Typography>
        </Button>
      )}
      {state === "used" && (
        <Button
          onClick={() => handleClick(letter)}
          style={{ backgroundColor: "#787C7E" }}
          // disabled={answer.length > 4}
        >
          <Typography className={classes.Letter}>{letter}</Typography>
        </Button>
      )}
      {state === "unused" && (
        <Button
          onClick={() => handleClick(letter)}
          style={{ backgroundColor: "#D3D6DA", width: "10px" }}
          className={classes.Button}
          // disabled={answer.length > 4}
        >
          <Typography className={classes.Letter}>{letter}</Typography>
        </Button>
      )}
    </>
  );
};

export default LetterButtun;
