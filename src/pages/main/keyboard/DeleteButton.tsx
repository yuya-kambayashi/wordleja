import React from "react";
import { Button } from "@mui/material";
import { BackspaceOutlined } from "@mui/icons-material";
import { AnswerLetterState } from "../answer/AnswerLetterState";
import { styled } from "@mui/material/styles";
import { KeyAction, KeyActionType } from "./KeyboardReducer";

const CustomButton = styled(Button)({
  backgroundColor: "#D3D6DA",
  color: "#000000",
  width: "105px",
});

type Props = {
  answer: string;
  onSetAnswer: (answer: string) => void;
  answerLetterStates: AnswerLetterState[];
  onSetAnswerLetterStates: (newAnswerLetterStates: AnswerLetterState[]) => void;
  answerRow: number;
  setLetterButtonDisabled: (disabled: boolean) => void;
  dispatchLetter: (action: KeyAction) => void;
};

const DeleteButton: React.FC<Props> = ({
  answer,
  onSetAnswer,
  answerLetterStates,
  onSetAnswerLetterStates,
  answerRow,
  setLetterButtonDisabled,
  dispatchLetter,
}) => {
  const handleClick = () => {
    // エンター押下済みの行は削除しない
    console.log(answer);
    console.log(answerRow);

    // if (answer.length <= answerRow * 5) {
    //   return;
    // }

    dispatchLetter({ type: KeyActionType.DELETE });

    // キーボードを押下可能な状態に戻します
    setLetterButtonDisabled(false);
  };

  return (
    <>
      <CustomButton onClick={handleClick}>
        <BackspaceOutlined />
      </CustomButton>
    </>
  );
};

export default DeleteButton;
