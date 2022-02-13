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
};

const ClearButton: React.FC<Props> = ({
  answer,
  onSetAnswer,
  answerLetterStates,
  onSetAnswerLetterStates,
  answerRow
}) => {
  // 押下されたキーを「empty」状態に変更します
  const setAnswerLetterEmpty = () => {
    let checkedAnswerLetterStates = answerLetterStates.slice();

    checkedAnswerLetterStates[answer.length - 1] = "empty";

    onSetAnswerLetterStates(checkedAnswerLetterStates);
    console.log("before");
    console.log(checkedAnswerLetterStates);

  };

  const handleClickClear = () => {

    console.log(answer);
    console.log(answerRow);
    console.log("before");
    console.log(answerLetterStates);

    // エンター押下済みの行は削除しない
    if (answer.length <= answerRow * 5){
      return;
    }

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
