import React, { useState, useEffect } from "react";
import LetterButton from "./LetterButton";

const LetterState = {
  unused: "unused",
  used: "used",
  matach: "match"
} as const;
export type LetterStateType = typeof LetterState[keyof typeof LetterState];

type Props = {
  answer: string;
  onSetAnswer: (answer: string) => void;
};
const Keyboard: React.FC<Props> = ({ answer, onSetAnswer }) => {
  const initalLetterState = Array(26).fill("unused");

  const [letterStates, setLetterStates] = useState<LetterStateType[]>(
    initalLetterState
  );

  const convertToIndex = (letter: string) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet.indexOf(letter);
  };

  const handleClickEnter = () => {
    const collercAnswer = "ABCDE";

    let checkedLetterState = letterStates.slice();

    for (let i = 0; i < letterStates.length; i++) {
      const colletAnswerLetter = collercAnswer.substr(i, 1);
      const answerLetter = answer.substr(i, 1);

      if (colletAnswerLetter === answerLetter) {
        checkedLetterState = checkedLetterState.map((state, index) =>
          index === convertToIndex(answerLetter) ? "match" : state
        );
      } else {
        checkedLetterState = checkedLetterState.map((state, index) =>
          index === convertToIndex(answerLetter) ? "used" : state
        );
      }
    }
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
