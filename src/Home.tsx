import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonA: React.FC<Props> = () => {
  const navigation = useNavigate();

  const handleClickStart = () => {
    navigation("/wordle");
  };

  return (
    <>
      <div>{"Welcome To WordleJa"}</div>

      <button onClick={handleClickStart}>{"Start"}</button>
    </>
  );
};

export default ButtonA;
