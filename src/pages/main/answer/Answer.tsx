import React from "react";

type Props = {
  answer: string;
};

const Answer: React.FC<Props> = ({ answer }) => {
  return (
    <>
      <div>{"ANSWER:"}</div>
      <div>{answer}</div>
    </>
  );
};

export default Answer;
