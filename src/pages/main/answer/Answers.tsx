import React from "react";
import Answer from "./Answer";
import { Stack } from "@mui/material";
import { AnswerLetterState } from "./AnswerLetterState";
import { styled } from "@mui/material/styles";

const CustomStack = styled(Stack)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  alignItems: "flex-start"
});

type Props = {
  answers: string;
  answerLetterStates: AnswerLetterState[];
};

const Answers: React.FC<Props> = ({ answers, answerLetterStates }) => {
  return (
    <>
      <CustomStack spacing={1}>
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
      </CustomStack>
    </>
  );
};

export default Answers;
