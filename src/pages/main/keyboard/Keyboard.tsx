import React from "react";

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
      </div>
    </>
  );
};

export default Keyboard;
