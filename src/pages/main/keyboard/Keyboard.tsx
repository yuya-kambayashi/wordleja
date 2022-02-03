import React, { useState, useEffect } from "react";
import LetterButton from "./LetterButton";

const LetterStateType = {
  unused: "unused",
  used: "used",
  matach: "match"
} as const;
export type LetterState = typeof LetterStateType[keyof typeof LetterStateType];

type Props = {
  answer: string;
  onSetAnswer: (answer: string) => void;
};
const Keyboard: React.FC<Props> = ({ answer, onSetAnswer }) => {
  const initalLetterState = Array(26).fill("unused");

  const [letterStates, setLetterStates] = useState<LetterState[]>(
    initalLetterState
  );

  const convertToIndex = (letter: string) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet.indexOf(letter);
  };

  const handleClickEnter = () => {
    const collectAnswer = "ABCDD";
    let checkedLetterState = letterStates.slice();

    // 正解判定
    for (let i = 0; i < collectAnswer.length; i++) {
      console.log(i + " start " + checkedLetterState);

      const colletAnswerLetter = collectAnswer.substr(i, 1);
      const answerLetter = answer.substr(i, 1);

      // 完全一致判定
      if (colletAnswerLetter === answerLetter) {
        checkedLetterState = checkedLetterState.map((state, index) =>
          index === convertToIndex(answerLetter) ? "match" : state
        );
      }

      // 部分一致判定

      console.log(i + " end " + checkedLetterState);
    }

    // 不正解文字の状態変更
    for (let i = 0; i < answer.length; i++) {
      const answeLetter = answer.substr(i, 1);

      console.log(i + " " + answeLetter + " " + convertToIndex(answeLetter));

      if (checkedLetterState[convertToIndex(answeLetter)] !== "unused") {
        console.log("!unused");

        continue;
      }

      checkedLetterState[convertToIndex(answeLetter)] = "used";
    }

    console.log("checkedLetterState last " + checkedLetterState);

    setLetterStates(checkedLetterState);
  };
  const handleClickClear = () => {
    onSetAnswer(answer.slice(0, -1));
  };
  return (
    <>
      <div>{"Keyboard:"}</div>
      <div>
        <LetterButton
          answer={answer}
          onSetAnswer={onSetAnswer}
          state={letterStates[convertToIndex("A")]}
          letter="A"
        />
        <LetterButton
          answer={answer}
          onSetAnswer={onSetAnswer}
          state={letterStates[convertToIndex("B")]}
          letter="B"
        />
        <LetterButton
          answer={answer}
          onSetAnswer={onSetAnswer}
          state={letterStates[convertToIndex("C")]}
          letter="C"
        />
        <LetterButton
          answer={answer}
          onSetAnswer={onSetAnswer}
          state={letterStates[convertToIndex("D")]}
          letter="D"
        />
        <LetterButton
          answer={answer}
          onSetAnswer={onSetAnswer}
          state={letterStates[convertToIndex("E")]}
          letter="E"
        />
        <button
          onClick={() => handleClickEnter()}
          disabled={answer.length !== 5}
        >
          {"ENTER"}
        </button>
        <button onClick={() => handleClickClear()}>{"CLEAR"}</button>
      </div>
    </>
  );
};

export default Keyboard;
