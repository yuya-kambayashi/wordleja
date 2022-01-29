import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonA from "./ButtonA";

const Keyboard: React.FC<Props> = () => {
  const navigation = useNavigate();

  return (
    <>
      <div>{"Keyboard"}</div>
      <div>
        <ButtonA />
      </div>
    </>
  );
};

export default Keyboard;
