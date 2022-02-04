import React from "react";
import AnswerLetter from "./AnswerLetter";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Stack } from "@mui/material";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    answer: {
      alignItems: "flex-start"
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
        <AnswerLetter answerLetter={answer.substring(0, 1)} state={"uncheck"} />
        <AnswerLetter answerLetter={answer.substring(1, 2)} state={"unmatch"} />
        <AnswerLetter
          answerLetter={answer.substring(2, 3)}
          state={"partialMatch"}
        />
        <AnswerLetter
          answerLetter={answer.substring(3, 4)}
          state={"exactMatch"}
        />
        <AnswerLetter answerLetter={answer.substring(4, 5)} state={"uncheck"} />
      </Stack>
    </>
  );
};

export default Answer;
