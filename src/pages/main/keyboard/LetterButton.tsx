import React from "react";
import { KeyLetterState } from "./KeyLetterState";
import { Button, Typography } from "@mui/material";
import { AnswerLetterState } from "../answer/AnswerLetterState";
import { styled } from "@mui/material/styles";

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
  answer: string;
  onSetAnswer: (answer: string) => void;
  state: KeyLetterState;
  letter: string;
  answerLetterStates: AnswerLetterState[];
  onSetAnswerLetterStates: (newAnswerLetterStates: AnswerLetterState[]) => void;
  disabled: boolean;
};

const LetterButtun: React.FC<Props> = ({
  answer,
  onSetAnswer,
  state,
  letter,
  answerLetterStates,
  onSetAnswerLetterStates,
  disabled,
}) => {
  // 押下されたキーを「uncheck」状態に変更します
  const setAnswerLetterUncheck = () => {
    let checkedAnswerLetterStates = answerLetterStates.slice();

    checkedAnswerLetterStates[answer.length] = "uncheck";

    onSetAnswerLetterStates(checkedAnswerLetterStates);
  };

  const handleClick = (letter: string) => {
    onSetAnswer(answer + letter);

    setAnswerLetterUncheck();
  };

  return (
    <>
      {state === "exactMatch" && (
        <CustomButton
          onClick={() => handleClick(letter)}
          style={{ backgroundColor: "#6AAA64" }}
          disabled={disabled}
        >
          <CustomTypography>{letter}</CustomTypography>
        </CustomButton>
      )}
      {state === "partialMatch" && (
        <CustomButton
          onClick={() => handleClick(letter)}
          style={{ backgroundColor: "#C9B458" }}
          disabled={disabled}
        >
          <CustomTypography>{letter}</CustomTypography>
        </CustomButton>
      )}
      {state === "used" && (
        <CustomButton
          onClick={() => handleClick(letter)}
          style={{ backgroundColor: "#787C7E" }}
          disabled={disabled}
        >
          <CustomTypography>{letter}</CustomTypography>
        </CustomButton>
      )}
      {state === "unused" && (
        <CustomButton
          onClick={() => handleClick(letter)}
          style={{ backgroundColor: "#D3D6DA" }}
          disabled={disabled}
        >
          <CustomTypography>{letter}</CustomTypography>
        </CustomButton>
      )}
    </>
  );
};

export default LetterButtun;
