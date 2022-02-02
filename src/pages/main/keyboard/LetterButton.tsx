import React from "react";

type Props = {
  input: string;
  onSetInput: (input: string) => void;
  state: "unused" | "used" | "match";
  letter: string;
};

const LetterButtib: React.FC<Props> = ({
  input,
  onSetInput,
  state,
  letter
}) => {
  const handleClick = (letter: string) => {
    onSetInput(input + letter);
  };
  return (
    <>
      <div>
        {state === "match" && (
          <button
            onClick={() => handleClick(letter)}
            style={{ backgroundColor: "#6AAA64" }}
            disabled={input.length > 4}
          >
            {letter}
          </button>
        )}
        {state === "used" && (
          <button
            onClick={() => handleClick(letter)}
            style={{ backgroundColor: "#787C7E" }}
            disabled={input.length > 4}
          >
            {letter}
          </button>
        )}
        {state === "unused" && (
          <button
            onClick={() => handleClick(letter)}
            style={{ backgroundColor: "#D3D6DA" }}
            disabled={input.length > 4}
          >
            {letter}
          </button>
        )}
      </div>
    </>
  );
};

export default LetterButtib;
