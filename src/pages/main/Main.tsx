import React, { useState, createContext, useReducer } from "react";
import Header from "./header/Header";
import Answers from "./answer/Answers";
import Keyboard from "./keyboard/Keyboard";
import { AnswerLetterState } from "./answer/AnswerLetterState";
import CollectAnswer from "./CollectAnswer";
import {
  KeyActionType,
  reducerKeys,
  KeyAction
} from "./keyboard/KeyboardReducer";

export const CollectAnswerContext = createContext("");
type Props = {};

const initailLetterState = {
  answer: "",
  answerLetterStates: Array(3).fill("empty")
};

const Main: React.FC<Props> = () => {
  // 正答
  const [collectAnswer, setCollectAnswer] = useState<string>("");

  // 回答
  const [answer, setAnswer] = useState<string>("");

  const [letters, dispatchLetter] = useReducer(reducerKeys, initailLetterState);

  // 回答に対するキーの状態
  const [answerLetterStates, setAnswerLetterStates] = useState<
    AnswerLetterState[]
  >(Array(25).fill("empty"));

  return (
    <>
      <CollectAnswer onSetCollectAnswer={setCollectAnswer} />
      <CollectAnswerContext.Provider value={collectAnswer}>
        <Header />
        <Answers answers={answer} answerLetterStates={answerLetterStates} />
        <p>{letters.answer}</p>
        <p>{letters.answerLetterStates}</p>
        <Keyboard
          answer={answer}
          onSetAnswer={setAnswer}
          answerLetterStates={answerLetterStates}
          onSetAnswerLetterStates={setAnswerLetterStates}
          dispatchLetter={dispatchLetter}
        />
      </CollectAnswerContext.Provider>
    </>
  );
};

export default Main;
