import React, { useState } from "react";
import Header from "./header/Header";
import Answer from "./answer/Answer";
import Keyboard from "./keyboard/Keyboard";

type Props = {};

const Main: React.FC<Props> = () => {
  return (
    <>
      <Header />
      <Answer />
      <Keyboard />
    </>
  );
};

export default Main;
