import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonA from "./ButtonA";

type Props = {
  onSetInput: (input: string) => void;
};

const Keyboard: React.FC<Props> = ({ onSetInput }) => {
  const navigation = useNavigate();

  return (
    <>
      <div>{"Keyboard"}</div>
      <div>
        <ButtonA onSetInput={onSetInput} />
      </div>
    </>
  );
};

export default Keyboard;
