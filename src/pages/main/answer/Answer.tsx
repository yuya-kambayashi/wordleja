import React from "react";
import AnswerLetter from "./AnswerLetter";
import { Stack } from "@mui/material";
import { AnswerLetterState } from "./AnswerLetterState";
import { styled } from "@mui/material/styles";

const CustomStack = styled(Stack)({
  alignItems: "flex-start"
});

type Props = {
  answer: string;
  answerLetterStates: AnswerLetterState[];
};

const Answer: React.FC<Props> = ({ answer, answerLetterStates }) => {
  return (
    <>
      <CustomStack direction="row" spacing={1}>
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
      </CustomStack>
    </>
  );
};

export default Answer;
