import React, { useState } from "react";
import LetterButton from "./LetterButton";

type Props = {
  input: string;
  onSetInput: (input: string) => void;
};
const Keyboard: React.FC<Props> = ({ input, onSetInput }) => {
  const [stateE, setStateE] = useState<"unused" | "used" | "match">("unused");
  const [stateF, setStateF] = useState<"unused" | "used" | "match">("unused");
  const [stateG, setStateG] = useState<"unused" | "used" | "match">("unused");

  const handleClick = (letter: string) => {
    onSetInput(input + letter);
  };
  const handleClickEnter = () => {
    setStateE("used");
    setStateF("match");
    setStateG("used");
  };
  return (
    <>
      <div>{"Keyboard"}</div>
      <div>
        <button onClick={() => handleClick("A")}>{"A"}</button>
        <button onClick={() => handleClick("B")}>{"B"}</button>
        <button onClick={() => handleClick("C")}>{"C"}</button>
        <button onClick={() => handleClick("D")}>{"D"}</button>
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
        <button onClick={() => handleClickEnter()}>{"ENTER"}</button>
      </div>
    </>
  );
};

export default Keyboard;
