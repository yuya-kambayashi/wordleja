import React from "react";
import { Button } from "@mui/material";
import { BackspaceOutlined } from "@mui/icons-material";
import { AnswerLetterState } from "../answer/AnswerLetterState";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)({
  backgroundColor: "#D3D6DA",
  color: "#000000",
  width: "105px"
});

type Props = {
  answer: string;
  onSetAnswer: (answer: string) => void;
  answerLetterStates: AnswerLetterState[];
  onSetAnswerLetterStates: (newAnswerLetterStates: AnswerLetterState[]) => void;
};

const ClearButton: React.FC<Props> = ({
  answer,
  onSetAnswer,
  answerLetterStates,
  onSetAnswerLetterStates
}) => {
  // 押下されたキーを「empty」状態に変更します
  const setAnswerLetterEmpty = () => {
    let checkedAnswerLetterStates = answerLetterStates.slice();

    checkedAnswerLetterStates[answer.length - 1] = "empty";

    onSetAnswerLetterStates(checkedAnswerLetterStates);
  };

  const handleClickClear = () => {
    onSetAnswer(answer.slice(0, -1));

    setAnswerLetterEmpty();
  };

  return (
    <>
      <CustomButton onClick={handleClickClear}>
        <BackspaceOutlined />
      </CustomButton>
    </>
  );
};

export default ClearButton;
