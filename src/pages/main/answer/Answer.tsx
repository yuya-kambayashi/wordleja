import React from "react";
import AnswerLetter from "./AnswerLetter";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Stack } from "@mui/material";
import clsx from "clsx";
import AnswerLetterState from "./AnswerLetterState";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    answer: {
      alignItems: "flex-start"
    }
  })
);
type Props = {
  answer: string;
  answerLetterStates: AnswerLetterState[];
};

const Answer: React.FC<Props> = ({ answer, answerLetterStates }) => {
  const classes = useStyles();

  // console.log(answer);
  // console.log(answerLetterStates);

  return (
    <>
      <Stack direction="row" spacing={1} className={classes.answer}>
        <AnswerLetter
          answerLetter={answer.substring(0, 1)}
          state={answerLetterStates[0]}
        />
        <AnswerLetter
          answerLetter={answer.substring(1, 2)}
          state={answerLetterStates[1]}
        />
        <AnswerLetter
          answerLetter={answer.substring(2, 3)}
          state={answerLetterStates[2]}
        />
        <AnswerLetter
          answerLetter={answer.substring(3, 4)}
          state={answerLetterStates[3]}
        />
        <AnswerLetter
          answerLetter={answer.substring(4, 5)}
          state={answerLetterStates[4]}
        />
      </Stack>
    </>
  );
};

export default Answer;
