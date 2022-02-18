import React from "react";
import { KeyLetterState } from "./KeyLetterState";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { KeyAction, KeyActionType } from "./KeyboardReducer";

const CustomButton = styled(Button)({
  height: "75px",
  borderRadius: "4px",
  cursor: "pointer",
  userSelect: "none",
  flex: "1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});

const CustomTypography = styled(Typography)({
  color: "#000000",
  fontWeight: "bold"
});

type Props = {
  state: KeyLetterState;
  letter: string;
  disabled: boolean;
  dispatchLetter: (action: KeyAction) => void;
};

const LetterButton2: React.FC<Props> = ({
  state,
  letter,
  disabled,
  dispatchLetter
}) => {
  return (
    <>
      {state === "exactMatch" && (
        <CustomButton
          onClick={() =>
            dispatchLetter({ type: KeyActionType.INPUT, target: letter })
          }
          style={{ backgroundColor: "#6AAA64" }}
          disabled={disabled}
        >
          <CustomTypography>{letter}</CustomTypography>
        </CustomButton>
      )}
      {state === "partialMatch" && (
        <CustomButton
          onClick={() =>
            dispatchLetter({ type: KeyActionType.INPUT, target: letter })
          }
          style={{ backgroundColor: "#C9B458" }}
          disabled={disabled}
        >
          <CustomTypography>{letter}</CustomTypography>
        </CustomButton>
      )}
      {state === "used" && (
        <CustomButton
          onClick={() =>
            dispatchLetter({ type: KeyActionType.INPUT, target: letter })
          }
          style={{ backgroundColor: "#787C7E" }}
          disabled={disabled}
        >
          <CustomTypography>{letter}</CustomTypography>
        </CustomButton>
      )}
      {state === "unused" && (
        <CustomButton
          onClick={() =>
            dispatchLetter({ type: KeyActionType.INPUT, target: letter })
          }
          style={{ backgroundColor: "#D3D6DA" }}
          disabled={disabled}
        >
          <CustomTypography>{letter}</CustomTypography>
        </CustomButton>
      )}
    </>
  );
};

export default LetterButton2;
