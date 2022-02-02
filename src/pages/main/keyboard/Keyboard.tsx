import React, { useState } from "react";
import LetterButton from "./LetterButton";

type Props = {
  input: string;
  onSetInput: (input: string) => void;
};
const Keyboard: React.FC<Props> = ({ input, onSetInput }) => {
  const [stateA, setStateA] = useState<"unused" | "used" | "match">("unused");
  const [stateB, setStateB] = useState<"unused" | "used" | "match">("unused");
  const [stateC, setStateC] = useState<"unused" | "used" | "match">("unused");
  const [stateD, setStateD] = useState<"unused" | "used" | "match">("unused");
  const [stateE, setStateE] = useState<"unused" | "used" | "match">("unused");
  const [stateF, setStateF] = useState<"unused" | "used" | "match">("unused");
  const [stateG, setStateG] = useState<"unused" | "used" | "match">("unused");

  const handleClickEnter = () => {
    setStateA("used");
    setStateB("used");
    setStateC("used");
    setStateD("used");
    setStateE("used");
    setStateF("match");
    setStateG("used");
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
        <LetterButton
          input={input}
          onSetInput={onSetInput}
          state={stateF}
          letter="F"
        />
        <LetterButton
          input={input}
          onSetInput={onSetInput}
          state={stateG}
          letter="G"
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
