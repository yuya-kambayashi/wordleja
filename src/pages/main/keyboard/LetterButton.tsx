import React from "react";

type Props = {
  input: string;
  onSetInput: (input: string) => void;
  state: "match" | "used" | "unused";
};

const LetterButtib: React.FC<Props> = ({ input, onSetInput, state }) => {
  const handleClick = (letter: string) => {
    onSetInput(input + letter);
  };
  return (
    <>
      <div>
        {state === "match" && (
          <button
            onClick={() => handleClick("E")}
            style={{ backgroundColor: "#6AAA64" }}
          >
            {"E"}
          </button>
        )}
        {state === "used" && (
          <button
            onClick={() => handleClick("E")}
            style={{ backgroundColor: "#787C7E" }}
          >
            {"E"}
          </button>
        )}
        {state === "unused" && (
          <button
            onClick={() => handleClick("E")}
            style={{ backgroundColor: "#D3D6DA" }}
          >
            {"E"}
          </button>
        )}
      </div>
    </>
  );
};

export default LetterButtib;
