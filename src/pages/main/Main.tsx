import React, { useState } from "react";
import Header from "./header/Header";
import Answers from "./answer/Answers";
import Keyboard from "./keyboard/Keyboard";

type Props = {};

const Main: React.FC<Props> = () => {
  const [answer, setAnswer] = useState<string>("");

  const handleSetAnswer = (newAnswer: string) => {
    setAnswer(newAnswer);
  };

  const [targetAnswerIndex, setTargetAnswerIndex] = useState<number>(0);
  const handleSetTargetAnswerIndex = () => {
    setTargetAnswerIndex(targetAnswerIndex + 1);
  };

  return (
    <>
      <Header />
      <Answers answers={answer} />
      <Keyboard
        answer={answer}
        onSetAnswer={handleSetAnswer}
        targetAnswerIndex={targetAnswerIndex}
        onSetTargetAnswerIndex={handleSetTargetAnswerIndex}
      />
      <div>{targetAnswerIndex}</div>
      <div>{answer}</div>
    </>
  );
};

export default Main;
