import React, {useContext} from "react";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { CollectAnswerContext } from "../Main";
import { KeyLetterState } from "./KeyLetterState";
import { convertToIndex } from "./KeyboardUtil";
import { AnswerLetterState } from "../answer/AnswerLetterState";
import {answerCandidates} from "../../main/AnswerCandidates";

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
  targetAnswer: string;
  answerRow: number;
  SetAnswerRow: (index: number) => void;
  setLetterButtonDisabled: (disabled: boolean) => void;
  keyLetterStates: KeyLetterState[];
  setKeyLetterStates: (states: KeyLetterState[]) => void;
  answerLetterStates: AnswerLetterState[];
  onSetAnswerLetterStates: (newAnswerLetterStates: AnswerLetterState[]) => void;
  setOpenFewLettersError: (open: boolean) => void;
};

const EnterButtun: React.FC<Props> = ({
  targetAnswer,
  answerRow,
  SetAnswerRow,
  setLetterButtonDisabled,
  keyLetterStates,
  setKeyLetterStates,
  answerLetterStates,
  onSetAnswerLetterStates,
  setOpenFewLettersError
}) => {
  const collectAnswer = useContext(CollectAnswerContext) as string;


  // エンターキー押下ハンドラ
  const handleClickEnter = () => {

    // 回答の入力文字数チェック
    if (targetAnswer.length < 5){
      setOpenFewLettersError(true);
      return;
    }

    // 回答の辞書チェック
    if ( !answerCandidates.some((candidate) => candidate === targetAnswer) ){
      setOpenFewLettersError(true);
      return;
    }

    // キーボードに対する正誤判定
    checkKeyLetter(collectAnswer, targetAnswer);

    // 回答に対する正誤判定
    checkAnswerLetter(collectAnswer, targetAnswer);

    // １行を確定させます
    SetAnswerRow(answerRow + 1);
    setLetterButtonDisabled(false);
  };

  const checkKeyLetter = (collectAnswer: string, targetAnswer: string) => {
    //
    // キーボードの正誤判定
    //
    let checkedKeyLetterState = keyLetterStates.slice();

    // 正誤判定
    for (let i = 0; i < targetAnswer.length; i++) {
      const answeLetter = targetAnswer.substring(i, i+1);

      if (checkedKeyLetterState[convertToIndex(answeLetter)] === "exactMatch") {
        continue;
      }

      // 完全一致
      if (collectAnswer.substring(i, i+1) === answeLetter) {
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

    setKeyLetterStates(checkedKeyLetterState);
  };

  const checkAnswerLetter = (collectAnswer: string, targetAnswer: string) => {
    //
    // 回答の正誤判定
    //
    let checkedAnswerLetterStates = answerLetterStates.slice();

    for (let i = 0; i < targetAnswer.length; i++) {
      const answeLetter = targetAnswer.substring(i, i+1);

      // 完全一致
      if (collectAnswer.substring(i, i+1) === answeLetter) {
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

    onSetAnswerLetterStates(checkedAnswerLetterStates);
  };
  
  return (
    <>
      <CustomButton
        onClick={handleClickEnter}
      >
        <CustomTypography>{"ENTER"}</CustomTypography>
      </CustomButton>
    </>
  );
};

export default EnterButtun;
