import React from "react";

type Props = {
  answerLetter: string;
  className: string;
};

const AnswerLetter: React.FC<Props> = ({ answerLetter, className }) => {
  return (
    <>
      <p className={className}>{answerLetter}</p>
    </>
  );
};

export default AnswerLetter;
