import React, { useState } from "react";
import LetterButton from "./LetterButton";

const LetterState = {
  unused: "unused",
  user: "used",
  matach: "match"
} as const;
export type LetterState = typeof LetterState[keyof typeof LetterState];

type Props = {
  input: string;
  onSetInput: (input: string) => void;
};
const Keyboard: React.FC<Props> = ({ input, onSetInput }) => {
  const [stateA, setStateA] = useState<LetterState>("unused");
  const [stateB, setStateB] = useState<LetterState>("unused");
  const [stateC, setStateC] = useState<LetterState>("unused");
  const [stateD, setStateD] = useState<LetterState>("unused");
  const [stateE, setStateE] = useState<LetterState>("unused");

  const handleClickEnter = () => {
    const answer = "ABCDE";

    const answer1 = answer.substr(0, 1);
    console.log("answer1" + answer1);
    const input1 = input.substr(0, 1);
    console.log("input1" + input1);

    if (answer1 === input1) {
      switch (answer1) {
        case "A":
          setStateA("match");
          break;
        case "B":
          setStateB("match");
          break;
        case "C":
          setStateC("match");
          break;
        case "D":
          setStateD("match");
          break;
        case "E":
          setStateE("match");
          break;
        default:
          break;
      }
    } else {
      switch (answer1) {
        case "A":
          setStateA("used");
          break;
        case "B":
          setStateB("used");
          break;
        case "C":
          setStateC("used");
          break;
        case "D":
          setStateD("used");
          break;
        case "E":
          setStateE("used");
          break;
        default:
          break;
      }
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
          state={stateA}
          letter="A"
        />
        <LetterButton
          input={input}
          onSetInput={onSetInput}
          state={stateB}
          letter="B"
        />
        <LetterButton
          input={input}
          onSetInput={onSetInput}
          state={stateC}
          letter="C"
        />
        <LetterButton
          input={input}
          onSetInput={onSetInput}
          state={stateD}
          letter="D"
        />
        <LetterButton
          input={input}
          onSetInput={onSetInput}
          state={stateE}
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
