import React from "react";
import Answer from "./Answer";
import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { letterStateType } from "../../main/Main";

const CustomStack = styled(Stack)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  alignItems: "flex-start",
});

type Props = {
  LetterState: letterStateType;
};

const Answers: React.FC<Props> = ({ LetterState }) => {
  return (
    <>
      <CustomStack spacing={1}>
        <Answer
          answer={LetterState.answer.substring(0, 5)}
          answerLetterStates={LetterState.answerLetterStates.slice(0, 5)}
        />
        <Answer
          answer={LetterState.answer.substring(5, 10)}
          answerLetterStates={LetterState.answerLetterStates.slice(5, 10)}
        />
        <Answer
          answer={LetterState.answer.substring(10, 15)}
          answerLetterStates={LetterState.answerLetterStates.slice(10, 15)}
        />
        <Answer
          answer={LetterState.answer.substring(15, 20)}
          answerLetterStates={LetterState.answerLetterStates.slice(15, 20)}
        />
        <Answer
          answer={LetterState.answer.substring(20, 25)}
          answerLetterStates={LetterState.answerLetterStates.slice(20, 25)}
        />
      </CustomStack>
    </>
  );
};

export default Answers;
