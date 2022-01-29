import React, { useState } from "react";
import Header from "./header/Header";
import Answer from "./answer/Answer";
import Keyboard from "./keyboard/Keyboard";

type Props = {};

const Main: React.FC<Props> = () => {
  const [input, setInput] = useState<string>("");

  const handleSetInput = (newInput: string) => {
    setInput(newInput);
  };

  return (
    <>
      <Header />
      <Answer />
      {"input:" + input}
      <Keyboard onSetInput={handleSetInput} />
    </>
  );
};

export default Main;
