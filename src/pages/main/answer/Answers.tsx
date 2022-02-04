import React from "react";
import Answer from "./Answer";

type Props = {
  answers: string;
};

const Answers: React.FC<Props> = ({ answers }) => {
  return (
    <>
      <div>{"ANSWER:"}</div>
      <div>{"========"}</div>
      <div>{<Answer answer={answers.substring(0, 5)} />}</div>
      <div>{answers.substring(5, 10)}</div>
      <div>{answers.substring(10, 15)}</div>
      <div>{answers.substring(15, 20)}</div>
      <div>{"========"}</div>
    </>
  );
};

export default Answers;
