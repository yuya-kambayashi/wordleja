import React from "react";
import AnswerLetterState from "./AnswerLetterState";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Stack } from "@mui/material";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    answerLetter: {
      color: "#FFFFFF",
      width: "62px",
      height: "62x",
      fontSize: "2rem",
      fontWeight: "bold"
    },
    answerLetter1: {
      color: "#FFFFFF",
      width: "62px",
      height: "62x",
      fontSize: "2rem",
      fontWeight: "bold",
      marginTop: "0px"
    },
    answerLetterUncheck: {
      backgroundColor: "#FFFFFF",
      border: "1px solid #787C7E",
      color: "black"
    },
    answerLetterUnmatch: {
      backgroundColor: "#787C7E"
    },
    answerLetterPartialMatch: {
      backgroundColor: "#C9B458"
    },
    answerLetterExactMatch: {
      backgroundColor: "#6AAA64"
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
        <p className={clsx(classes.answerLetter1, classes.answerLetterUncheck)}>
          {answerLetter}
        </p>
      )}
      {state === "unmatch" && (
        <p className={clsx(classes.answerLetter1, classes.answerLetterUnmatch)}>
          {answerLetter}
        </p>
      )}
      {state === "partialMatch" && (
        <p
          className={clsx(
            classes.answerLetter1,
            classes.answerLetterPartialMatch
          )}
        >
          {answerLetter}
        </p>
      )}
      {state === "exactMatch" && (
        <p
          className={clsx(
            classes.answerLetter1,
            classes.answerLetterExactMatch
          )}
        >
          {answerLetter}
        </p>
      )}
    </>
  );
};

export default AnswerLetter;
