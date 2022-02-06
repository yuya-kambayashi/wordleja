import React from "react";
import { AnswerLetterState } from "./AnswerLetterState";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Typography } from "@mui/material";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    answerLetter: {
      color: "#FFFFFF",
      height: "5em",
      width: "5em"
    },
    answerLetterUncheck: {
      border: "1px solid #D8D8D8",
      borderWidth: "0.2em",
      color: "black"
    },
    answerLetterUnmatch: {
      backgroundColor: "#787C7E",
      border: "1px solid #787C7E",
      borderWidth: "0.2em"
    },
    answerLetterPartialMatch: {
      backgroundColor: "#C9B458",
      border: "1px solid #C9B458",
      borderWidth: "0.2em"
    },
    answerLetterExactMatch: {
      backgroundColor: "#6AAA64",
      border: "1px solid #6AAA64",
      borderWidth: "0.2em"
    }
  })
);
type Props = {
  answerLetter: string;
  state: AnswerLetterState;
};

const AnswerLetter: React.FC<Props> = ({ answerLetter, state }) => {
  const classes = useStyles();

  return (
    <>
      {state === "uncheck" && (
        <Typography
          className={clsx(classes.answerLetter, classes.answerLetterUncheck)}
        >
          {answerLetter}
        </Typography>
      )}
      {state === "unmatch" && (
        <Typography
          className={clsx(classes.answerLetter, classes.answerLetterUnmatch)}
        >
          {answerLetter}
        </Typography>
      )}
      {state === "partialMatch" && (
        <Typography
          className={clsx(
            classes.answerLetter,
            classes.answerLetterPartialMatch
          )}
        >
          {answerLetter}
        </Typography>
      )}
      {state === "exactMatch" && (
        <Typography
          className={clsx(classes.answerLetter, classes.answerLetterExactMatch)}
        >
          {answerLetter}
        </Typography>
      )}
    </>
  );
};

export default AnswerLetter;
