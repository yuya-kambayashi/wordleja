import React from "react";

type Props = {
  answerLetter: string;
};

const AnswerLetter: React.FC<Props> = ({ answerLetter }) => {
  return (
    <>
      <div>
        <p style={{ color: "red" }}>{answerLetter}</p>
      </div>
    </>
  );
};

export default AnswerLetter;
