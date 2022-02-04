import React from "react";

type Props = {
  answer: string;
};

const Answers: React.FC<Props> = ({ answer }) => {
  return (
    <>
      <div>{"ANSWER:"}</div>
      <div>{"========"}</div>
      <div>{answer.substring(0, 5)}</div>
      <div>{answer.substring(5, 10)}</div>
      <div>{answer.substring(10, 15)}</div>
      <div>{answer.substring(15, 20)}</div>
      <div>{"========"}</div>
    </>
  );
};

export default Answers;
