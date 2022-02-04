import React from "react";
import AnswerLetter from "./AnswerLetter";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Stack } from "@mui/material";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    answer: {
      alignItems: "flex-start"
    },
    answerLetterUnmatch: {
      backgroundColor: "#787C7E"
    },
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
    answerLetterPartialMatch: {
      backgroundColor: "#C9B458"
    },
    answerLetterExactMatch: {
      backgroundColor: "#6AAA64"
    }
  })
);
type Props = {
  answer: string;
};

const Answer: React.FC<Props> = ({ answer }) => {
  const classes = useStyles();

  return (
    <>
      <div></div>
      <Stack direction="row" spacing={1} className={classes.answer}>
        <AnswerLetter
          answerLetter={answer.substring(0, 1)}
          className={clsx(classes.answerLetter1, classes.answerLetterUnmatch)}
        />
        <AnswerLetter
          answerLetter={answer.substring(1, 2)}
          className={clsx(
            classes.answerLetter,
            classes.answerLetterPartialMatch
          )}
        />
        <AnswerLetter
          answerLetter={answer.substring(2, 3)}
          className={clsx(classes.answerLetter, classes.answerLetterExactMatch)}
        />
        <AnswerLetter
          answerLetter={answer.substring(3, 4)}
          className={clsx(classes.answerLetter, classes.answerLetterUnmatch)}
        />
        <AnswerLetter
          answerLetter={answer.substring(4, 5)}
          className={clsx(classes.answerLetter, classes.answerLetterUnmatch)}
        />
      </Stack>
    </>
  );
};

export default Answer;
