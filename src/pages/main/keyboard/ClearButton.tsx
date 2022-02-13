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
  answerRow: number;
  setLetterButtonDisabled: (disabled : boolean) => void;
};

const ClearButton: React.FC<Props> = ({
  answer,
  onSetAnswer,
  answerLetterStates,
  onSetAnswerLetterStates,
  answerRow,
  setLetterButtonDisabled,
}) => {
  // 押下されたキーを「empty」状態に変更します
  const setAnswerLetterEmpty = () => {
    let checkedAnswerLetterStates = answerLetterStates.slice();

    checkedAnswerLetterStates[answer.length - 1] = "empty";

    onSetAnswerLetterStates(checkedAnswerLetterStates);
  };

  const handleClickClear = () => {

    // エンター押下済みの行は削除しない
    if (answer.length <= answerRow * 5){
      return;
    }

    // 回答を更新します
    onSetAnswer(answer.slice(0, -1));

    // 回答の状態をemptyに戻します
    setAnswerLetterEmpty();

    // キーボードを押下可能な状態に戻します
    setLetterButtonDisabled(false);
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
