import React, { useContext } from "react";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { CollectAnswerContext } from "../Main";
import { KeyLetterState } from "./KeyLetterState";
import { AnswerLetterState } from "../answer/AnswerLetterState";
import { convertToIndex } from "./KeyboardUtil";
import { answerCandidates } from "../AnswerCandidates";
import { KeyAction, KeyActionType } from "./KeyboardReducer";
import { letterStateType } from "../Main";

const CustomButton = styled(Button)({
  backgroundColor: "#D3D6DA",
  fontWeight: "bold",
  color: "#000000",
  width: "105px",
});

const CustomTypography = styled(Typography)({
  fontWeight: "bold",
});

type Props = {
  answerRow: number;
  SetAnswerRow: (index: number) => void;
  setLetterButtonDisabled: (disabled: boolean) => void;
  setOpenFewLettersError: (open: boolean) => void;
  setOpenInvalidAnswerError: (open: boolean) => void;
  dispatchLetter: (action: KeyAction) => void;
  letterState: letterStateType;
};

const EnterButtun: React.FC<Props> = ({
  answerRow,
  SetAnswerRow,
  setLetterButtonDisabled,
  setOpenFewLettersError,
  setOpenInvalidAnswerError,
  dispatchLetter,
  letterState,
}) => {
  const collectAnswer = useContext(CollectAnswerContext) as string;

  const targetAnswer = letterState.answer.substring(
    5 * answerRow,
    5 + 5 * answerRow
  );

  // エンターキー押下ハンドラ
  const handleClickEnter = () => {
    // 回答の入力文字数チェック
    if (targetAnswer.length < 5) {
      setOpenFewLettersError(true);
      return;
    }
    // 回答の辞書チェック
    if (!answerCandidates.some((candidate) => candidate === targetAnswer)) {
      setOpenInvalidAnswerError(true);
      return;
    }
    // キーボードに対する正誤判定
    const checkedKeyLetterState = checkKeyLetter(collectAnswer, targetAnswer);
    // 回答に対する正誤判定
    const checkedAnswerLetterState = checkAnswerLetter(
      collectAnswer,
      targetAnswer
    );

    dispatchLetter({
      type: KeyActionType.ENTER,
      answerLetterState: checkedAnswerLetterState,
      keyLetterState: checkedKeyLetterState,
    });

    // １行を確定させます
    SetAnswerRow(answerRow + 1);
    setLetterButtonDisabled(false);
  };

  const checkKeyLetter = (
    collectAnswer: string,
    targetAnswer: string
  ): KeyLetterState[] => {
    //
    // キーボードの正誤判定
    //
    let checkedKeyLetterState = letterState.keyLetterStates.slice();

    // 正誤判定
    for (let i = 0; i < targetAnswer.length; i++) {
      const answeLetter = targetAnswer.substring(i, i + 1);

      if (checkedKeyLetterState[convertToIndex(answeLetter)] === "exactMatch") {
        continue;
      }

      // 完全一致
      if (collectAnswer.substring(i, i + 1) === answeLetter) {
        checkedKeyLetterState[convertToIndex(answeLetter)] = "exactMatch";
      }
      // 部分一致
      else if (collectAnswer.match(answeLetter)) {
        checkedKeyLetterState[convertToIndex(answeLetter)] = "partialMatch";
      }
      // 不一致（使用済み）
      else {
        checkedKeyLetterState[convertToIndex(answeLetter)] = "used";
      }
    }

    return checkedKeyLetterState;
  };

  const checkAnswerLetter = (
    collectAnswer: string,
    targetAnswer: string
  ): AnswerLetterState[] => {
    //
    // 回答の正誤判定
    //
    let checkedAnswerLetterStates = letterState.answerLetterStates.slice();

    for (let i = 0; i < targetAnswer.length; i++) {
      const answeLetter = targetAnswer.substring(i, i + 1);

      // 完全一致
      if (collectAnswer.substring(i, i + 1) === answeLetter) {
        checkedAnswerLetterStates[i + 5 * answerRow] = "exactMatch";
      }
      // 部分一致
      else if (collectAnswer.match(answeLetter)) {
        checkedAnswerLetterStates[i + 5 * answerRow] = "partialMatch";
      }
      // 不一致（使用済み）
      else {
        checkedAnswerLetterStates[i + 5 * answerRow] = "unmatch";
      }
    }

    return checkedAnswerLetterStates;
  };

  return (
    <>
      <CustomButton onClick={handleClickEnter}>
        <CustomTypography>{"ENTER"}</CustomTypography>
      </CustomButton>
    </>
  );
};

export default EnterButtun;
