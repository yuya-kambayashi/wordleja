import React from "react";
import { Button } from "@mui/material";
import { BackspaceOutlined } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { KeyAction, KeyActionType } from "./KeyboardReducer";

const CustomButton = styled(Button)({
  backgroundColor: "#D3D6DA",
  color: "#000000",
  width: "105px",
});

type Props = {
  setLetterButtonDisabled: (disabled: boolean) => void;
  disabled: boolean;
  dispatchLetter: (action: KeyAction) => void;
};

const DeleteButton: React.FC<Props> = ({
  setLetterButtonDisabled,
  disabled,
  dispatchLetter,
}) => {
  const handleClick = () => {
    dispatchLetter({ type: KeyActionType.DELETE });

    // キーボードを押下可能な状態に戻します
    setLetterButtonDisabled(false);
  };

  return (
    <>
      <CustomButton onClick={handleClick} disabled={disabled}>
        <BackspaceOutlined />
      </CustomButton>
    </>
  );
};

export default DeleteButton;
