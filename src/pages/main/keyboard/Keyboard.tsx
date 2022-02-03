import React, { useState, useEffect } from "react";
import LetterButton from "./LetterButton";

const LetterState = {
  unused: "unused",
  used: "used",
  matach: "match"
} as const;
export type LetterStateType = typeof LetterState[keyof typeof LetterState];

type Props = {
  input: string;
  onSetInput: (input: string) => void;
};
const Keyboard: React.FC<Props> = ({ input, onSetInput }) => {
  const initalLetterState = Array(26).fill("unused");

  const [letterStates, setLetterStates] = useState<LetterStateType[]>(
    initalLetterState
  );

  const convertToIndex = (letter: string) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet.indexOf(letter);
  };

  const handleClickEnter = () => {
    const answer = "ABCDE";

    let checkedLetterState = letterStates.slice();

    for (let i = 0; i < answer.length; i++) {
      const answerLetter = answer.substr(i, 1);
      const inputLetter = input.substr(i, 1);

      if (answerLetter === inputLetter) {
        checkedLetterState = checkedLetterState.map((state, index) =>
          index === convertToIndex(answerLetter) ? "match" : state
        );
      } else {
        checkedLetterState = checkedLetterState.map((state, index) =>
          index === convertToIndex(answerLetter) ? "used" : state
        );
      }

      setLetterStates(checkedLetterState);
    }
  };
  const handleClickClear = () => {
    onSetInput("");
  };
  return (
    <>
      <div>{"Keyboard"}</div>
      <div>
        <LetterButton
          input={input}
          onSetInput={onSetInput}
          state={letterStates[convertToIndex("A")]}
          letter="A"
        />
        <LetterButton
          input={input}
          onSetInput={onSetInput}
          state={letterStates[convertToIndex("B")]}
          letter="B"
        />
        <LetterButton
          input={input}
          onSetInput={onSetInput}
          state={letterStates[convertToIndex("C")]}
          letter="C"
        />
        <LetterButton
          input={input}
          onSetInput={onSetInput}
          state={letterStates[convertToIndex("D")]}
          letter="D"
        />
        <LetterButton
          input={input}
          onSetInput={onSetInput}
          state={letterStates[convertToIndex("E")]}
          letter="E"
        />
        <button
          onClick={() => handleClickEnter()}
          disabled={input.length !== 5}
        >
          {"ENTER"}
        </button>
        <button onClick={() => handleClickClear()}>{"CLEAR"}</button>
      </div>
    </>
  );
};

export default Keyboard;
