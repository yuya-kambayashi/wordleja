import React from "react";
import { AnswerLetterState } from "./AnswerLetterState";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@mui/material";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    answerLetterBox: {
      color: "#FFFFFF",
      height: "5em",
      width: "5em",
      justifyContent: "center",
      verticalAlign: "center"
    },
    uncheck: {
      border: "1px solid #D8D8D8",
      borderWidth: "0.2em",
      color: "black"
    },
    unmatch: {
      backgroundColor: "#787C7E",
      border: "1px solid #787C7E",
      borderWidth: "0.2em"
    },
    partialMatch: {
      backgroundColor: "#C9B458",
      border: "1px solid #C9B458",
      borderWidth: "0.2em"
    },
    exactMatch: {
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
        <Box className={clsx(classes.answerLetterBox, classes.uncheck)}>
          <Typography
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              justifyContent: "center",
              marginTop: "10px"
            }}
          >
            {answerLetter}
          </Typography>
        </Box>
      )}
      {state === "unmatch" && (
        <Box className={clsx(classes.answerLetterBox, classes.unmatch)}>
          <Typography
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              justifyContent: "center",
              marginTop: "10px"
            }}
          >
            {answerLetter}
          </Typography>
        </Box>
      )}
      {state === "partialMatch" && (
        <Box className={clsx(classes.answerLetterBox, classes.partialMatch)}>
          <Typography
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              justifyContent: "center",
              marginTop: "10px"
            }}
          >
            {answerLetter}
          </Typography>
        </Box>
      )}
      {state === "exactMatch" && (
        <Box className={clsx(classes.answerLetterBox, classes.exactMatch)}>
          <Typography
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              justifyContent: "center",
              marginTop: "10px"
            }}
          >
            {answerLetter}
          </Typography>
        </Box>
      )}
    </>
  );
};

export default AnswerLetter;
