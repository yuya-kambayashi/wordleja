import React from "react";
import Answer from "./Answer";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Stack } from "@mui/material";
import clsx from "clsx";
import AnswerLetterState from "./AnswerLetterState";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    answers: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      alignItems: "flex-start"
    }
  })
);
type Props = {
  answers: string;
  answerLetterStates: AnswerLetterState[];
};

const Answers: React.FC<Props> = ({ answers, answerLetterStates }) => {
  const classes = useStyles();

  return (
    <>
      <Stack spacing={-1.5} className={classes.answers}>
        <Answer
          answer={answers.substring(0, 5)}
          answerLetterStates={answerLetterStates.slice(0, 5)}
        />
        <Answer
          answer={answers.substring(5, 10)}
          answerLetterStates={answerLetterStates.slice(5, 10)}
        />
        <Answer
          answer={answers.substring(10, 15)}
          answerLetterStates={answerLetterStates.slice(10, 15)}
        />
        <Answer
          answer={answers.substring(15, 20)}
          answerLetterStates={answerLetterStates.slice(15, 20)}
        />
        <Answer
          answer={answers.substring(20, 25)}
          answerLetterStates={answerLetterStates.slice(20, 25)}
        />
      </Stack>
    </>
  );
};

export default Answers;
