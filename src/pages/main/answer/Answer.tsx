import React from "react";
import AnswerLetter from "./AnswerLetter";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    answerLetterUnmatch: {
      backgroundColor: "#787C7E"
    },
    answerLetter: {
      color: "#FFFFFF",
      width: "62px",
      height: "62px",
      fontSize: "2rem",
      fontWeight: "bold"
      // justifyContent: "center"
    },
    answerLetterPartialMatch: {
      backgroundColor: "#C9B458"
    },
    answerLetterExactMatch: {
      backgroundColor: "#6AAA64"
    },
    answer: {
      display: "block"
      // marginLeft: "auto",
      // marginRight: "auto"
      // top: "100%",
      // left: "50%",
      // right: "50%",
      // marginRight: "-50%"
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
      <div className={classes.answer}>
        <AnswerLetter
          answerLetter={answer.substring(0, 1)}
          className={clsx(classes.answerLetter, classes.answerLetterUnmatch)}
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
      </div>
    </>
  );
};

export default Answer;
