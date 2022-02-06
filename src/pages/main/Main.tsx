import React, { useState, createContext } from "react";
import Header from "./header/Header";
import Answers from "./answer/Answers";
import Keyboard from "./keyboard/Keyboard";
import { AnswerLetterState } from "./answer/AnswerLetterState";

export const CollectAnswerContext = createContext("");
type Props = {};

const Main: React.FC<Props> = () => {
  const [answer, setAnswer] = useState<string>("");

  const handleSetAnswer = (newAnswer: string) => {
    setAnswer(newAnswer);
  };

  const initalAnswerLetterState = Array(25).fill("uncheck");

  const [answerLetterStates, setAnswerLetterStates] = useState<
    AnswerLetterState[]
  >(initalAnswerLetterState);

  const handleSetAnswerLetterStates = (
    newAnswerLetterStates: AnswerLetterState[]
  ) => {
    setAnswerLetterStates(newAnswerLetterStates);
  };

  const [collectAnswer, setCollectAnswer] = useState<string>("ABOUT");

  return (
    <>
      <CollectAnswerContext.Provider value={collectAnswer}>
        <Header />
        <Answers answers={answer} answerLetterStates={answerLetterStates} />
        <Keyboard
          answer={answer}
          onSetAnswer={handleSetAnswer}
          answerLetterStates={answerLetterStates}
          onSetAnswerLetterStates={handleSetAnswerLetterStates}
        />
      </CollectAnswerContext.Provider>
    </>
  );
};

export default Main;
