import React, { useState } from "react";
import Header from "./header/Header";
import Answers from "./answer/Answers";
import Keyboard from "./keyboard/Keyboard";
import AnswerLetterState from "./answer/AnswerLetterState";

type Props = {};

const Main: React.FC<Props> = () => {
  const [answer, setAnswer] = useState<string>("");

  const initalAnswerLetterState = Array(25).fill("partialMatch");

  const [answerLetterStates, setAnswerLetterStates] = useState<
    AnswerLetterState
  >(initalAnswerLetterState);

  const handleSetAnswer = (newAnswer: string) => {
    setAnswer(newAnswer);
  };

  return (
    <>
      <Header />
      <Answers answers={answer} answerLetterStates={answerLetterStates} />
      <Keyboard answer={answer} onSetAnswer={handleSetAnswer} />
    </>
  );
};

export default Main;
