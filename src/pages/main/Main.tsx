import React, { useState } from "react";
import Header from "./header/Header";
import Answers from "./answer/Answers";
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
      <Answers answers={answer} />
      <Keyboard answer={answer} onSetAnswer={handleSetAnswer} />
    </>
  );
};

export default Main;
