import React from "react";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)({
  backgroundColor: "#D3D6DA",
  fontWeight: "bold",
  color: "#000000",
  width: "105px"
});

const CustomTypography = styled(Typography)({
  fontWeight: "bold"
});

type Props = {
  answer: string;
  onSetAnswer: (answer: string) => void;
  onClickEnter: (answer: string) => void;
};

const EnterButtun: React.FC<Props> = ({
  answer,
  onSetAnswer,
  onClickEnter
}) => {
  return (
    <>
      <CustomButton
        onClick={onClickEnter}
        // disabled={answer.length > 4}
      >
        <CustomTypography>{"ENTER"}</CustomTypography>
      </CustomButton>
    </>
  );
};

export default EnterButtun;
