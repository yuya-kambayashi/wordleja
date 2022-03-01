import React, { useState, createContext, useReducer } from "react";
import Header from "./header/Header";
import Answers from "./answer/Answers";
import Keyboard from "./keyboard/Keyboard";
import { AnswerLetterState } from "./answer/AnswerLetterState";
import CollectAnswer from "./CollectAnswer";
import { reducerKeys } from "./keyboard/KeyboardReducer";
import { KeyLetterState } from "../main/keyboard/KeyLetterState";

export const CollectAnswerContext = createContext("");
type Props = {};

const initailLetterState: letterStateType = {
  answer: "",
  answerLetterStates: Array(25).fill("empty"),
  keyLetterStates: Array(26).fill("unused"),
};

export type letterStateType = {
  // 回答
  answer: string;
  // 回答の各文字の状態
  answerLetterStates: AnswerLetterState[];
  // キーボードの各文字の状態
  keyLetterStates: KeyLetterState[];
};

const Main: React.FC<Props> = () => {
  // 正答
  const [collectAnswer, setCollectAnswer] = useState<string>("");

  // 回答、キーボードの状態
  const [letters, dispatchLetter] = useReducer(reducerKeys, initailLetterState);

  return (
    <>
      <CollectAnswer onSetCollectAnswer={setCollectAnswer} />
      <CollectAnswerContext.Provider value={collectAnswer}>
        <Header />
        <Answers
          answers={letters.answer}
          answerLetterStates={letters.answerLetterStates}
        />
        <Keyboard
          answer={letters.answer}
          dispatchLetter={dispatchLetter}
          letterState={letters}
        />
      </CollectAnswerContext.Provider>
    </>
  );
};

export default Main;
