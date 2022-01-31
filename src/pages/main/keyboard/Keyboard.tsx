import React from "react";

type Props = {
  onSetInput: (input: string) => void;
};

const Keyboard: React.FC<Props> = ({ onSetInput }) => {
  const handleClick = (letter: string) => {
    onSetInput(letter);
  };
  return (
    <>
      <div>{"Keyboard"}</div>
      <div>
        <button onClick={() => handleClick("A")}>{"A"}</button>
        <button onClick={() => handleClick("B")}>{"B"}</button>
        <button onClick={() => handleClick("C")}>{"C"}</button>
        <button onClick={() => handleClick("D")}>{"D"}</button>
      </div>
    </>
  );
};

export default Keyboard;
