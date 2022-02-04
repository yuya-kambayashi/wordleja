import React from "react";
import AnswerLetter from "./AnswerLetter";

type Props = {
  answer: string;
};

const Answer: React.FC<Props> = ({ answer }) => {
  return (
    <>
      <AnswerLetter answerLetter={answer.substring(0, 1)} />
      <AnswerLetter answerLetter={answer.substring(1, 2)} />
      <AnswerLetter answerLetter={answer.substring(2, 3)} />
      <AnswerLetter answerLetter={answer.substring(3, 4)} />
      <AnswerLetter answerLetter={answer.substring(4, 5)} />
    </>
  );
};

export default Answer;
