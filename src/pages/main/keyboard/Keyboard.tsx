import React from "react";
import LetterButton from "./LetterButton";

type Props = {
  input: string;
  onSetInput: (input: string) => void;
};

const Keyboard: React.FC<Props> = ({ input, onSetInput }) => {
  const handleClick = (letter: string) => {
    onSetInput(input + letter);
  };
  return (
    <>
      <div>{"Keyboard"}</div>
      <div>
        <button onClick={() => handleClick("A")}>{"A"}</button>
        <button onClick={() => handleClick("B")}>{"B"}</button>
        <button onClick={() => handleClick("C")}>{"C"}</button>
        <button onClick={() => handleClick("D")}>{"D"}</button>
        <LetterButton input={input} onSetInput={onSetInput} state={"match"}>
          {"E"}
        </LetterButton>
        <LetterButton input={input} onSetInput={onSetInput} state={"used"}>
          {"F"}
        </LetterButton>
        <LetterButton input={input} onSetInput={onSetInput} state={"unused"}>
          {"G"}
        </LetterButton>
      </div>
    </>
  );
};

export default Keyboard;
