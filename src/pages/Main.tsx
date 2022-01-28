import React, { useState } from "react";
import ButtonA from "./ButtonA";

type Props = {};

const Main: React.FC<Props> = () => {
  return (
    <>
      <ButtonA />
      <ButtonA />
      <ButtonA />
      <ButtonA />
    </>
  );
};

export default Main;
