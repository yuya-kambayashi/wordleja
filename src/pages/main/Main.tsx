import React, { useState } from "react";
import Header from "./header/Header";
import Answer from "./answer/Answer";
import Keyboard from "./keyboard/Keyboard";

type Props = {};

const Main: React.FC<Props> = () => {
  const [answer, setAnswer] = useState<string>("");

  const handleSetAnswer = (newAnswer: string) => {
    setAnswer(newAnswer);
  };

  return (
    <>
      <Header />
      <Answer answer={answer} />
      <Keyboard answer={answer} onSetAnswer={handleSetAnswer} />
    </>
  );
};

export default Main;
