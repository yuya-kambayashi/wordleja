import React, { useState, createContext } from "react";
import Header from "./header/Header";
import Answers from "./answer/Answers";
import Keyboard from "./keyboard/Keyboard";
import { AnswerLetterState } from "./answer/AnswerLetterState";
import CollectAnswer from "./CollectAnswer";

export const CollectAnswerContext = createContext("");
type Props = {};

const Main: React.FC<Props> = () => {
  // 正答
  const [collectAnswer, setCollectAnswer] = useState<string>("");

  // 回答
  const [answer, setAnswer] = useState<string>("");

  // 回答に対するキーの状態
  const [answerLetterStates, setAnswerLetterStates] = useState<
    AnswerLetterState[]
  >(Array(25).fill("uncheck"));

  return (
    <>
      <CollectAnswer onSetCollectAnswer={setCollectAnswer} />
      <CollectAnswerContext.Provider value={collectAnswer}>
        <Header />
        <Answers answers={answer} answerLetterStates={answerLetterStates} />
        <Keyboard
          answer={answer}
          onSetAnswer={setAnswer}
          answerLetterStates={answerLetterStates}
          onSetAnswerLetterStates={setAnswerLetterStates}
        />
      </CollectAnswerContext.Provider>
    </>
  );
};

export default Main;
