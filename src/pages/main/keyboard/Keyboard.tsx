import React, { useState, useContext } from "react";
import LetterButton from "./LetterButton";
import EnterButton from "./EnterButton";
import ClearButton from "./ClearButton";
import { KeyLetterState } from "./KeyLetterState";
import { Stack } from "@mui/material";
import { AnswerLetterState } from "../answer/AnswerLetterState";
import { CollectAnswerContext } from "../Main";
import { styled } from "@mui/material/styles";

const KeyboardLinesStack = styled(Stack)({
  position: "absolute",
  top: "90%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  alignItems: "flex-start"
});

const KeyboardLines1Stack = styled(Stack)({});
const KeyboardLines2Stack = styled(Stack)({ paddingLeft: "40px" });
const KeyboardLines3Stack = styled(Stack)({});

type Props = {
  answer: string;
  onSetAnswer: (answer: string) => void;
  answerLetterStates: AnswerLetterState[];
  onSetAnswerLetterStates: (newAnswerLetterStates: AnswerLetterState[]) => void;
};

const Keyboard: React.FC<Props> = ({
  answer,
  onSetAnswer,
  answerLetterStates,
  onSetAnswerLetterStates
}) => {
  // 各キーの状態の配列
  const initalKeyLetterState = Array(26).fill("unused");

  const [keyLetterStates, setKeyLetterStates] = useState<KeyLetterState[]>(
    initalKeyLetterState
  );

  const convertToIndex = (letter: string) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet.indexOf(letter);
  };

  const [answerRow, SetAnswerRow] = useState<number>(0);

  const checkKeyLetter = (collectAnswer: string, targetAnswer: string) => {
    //
    // キーボードの正誤判定
    //
    let checkedKeyLetterState = keyLetterStates.slice();

    // 正誤判定
    for (let i = 0; i < targetAnswer.length; i++) {
      const answeLetter = targetAnswer.substr(i, 1);

      if (checkedKeyLetterState[convertToIndex(answeLetter)] === "exactMatch") {
        continue;
      }

      // 完全一致
      if (collectAnswer.substr(i, 1) === answeLetter) {
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
      const answeLetter = targetAnswer.substr(i, 1);

      // 完全一致
      if (collectAnswer.substr(i, 1) === answeLetter) {
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

  const collectAnswer = useContext(CollectAnswerContext) as string;
  const targetAnswer = answer.substring(5 * answerRow, 5 + 5 * answerRow);

  const handleClickEnter = () => {
    checkKeyLetter(collectAnswer, targetAnswer);

    checkAnswerLetter(collectAnswer, targetAnswer);

    SetAnswerRow(answerRow + 1);
  };

  return (
    <>
      <KeyboardLinesStack direction="column" spacing={1}>
        <KeyboardLines1Stack direction="row" spacing={1}>
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("Q")]}
            letter={"Q"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("W")]}
            letter={"R"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("E")]}
            letter={"E"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("R")]}
            letter={"R"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("T")]}
            letter={"T"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("Y")]}
            letter={"Y"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("U")]}
            letter={"U"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("I")]}
            letter={"I"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("O")]}
            letter={"O"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("P")]}
            letter={"P"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
          />
        </KeyboardLines1Stack>
        <KeyboardLines2Stack direction="row" spacing={1}>
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("A")]}
            letter={"A"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("S")]}
            letter={"S"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("D")]}
            letter={"D"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("F")]}
            letter={"F"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("G")]}
            letter={"G"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("H")]}
            letter={"H"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("J")]}
            letter={"J"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("K")]}
            letter={"K"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("L")]}
            letter={"L"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
          />
        </KeyboardLines2Stack>
        <KeyboardLines3Stack direction="row" spacing={1}>
          <EnterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            onClickEnter={handleClickEnter}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("Z")]}
            letter={"Z"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("X")]}
            letter={"X"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("C")]}
            letter={"C"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("V")]}
            letter={"V"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("B")]}
            letter={"B"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("N")]}
            letter={"N"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("M")]}
            letter={"M"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
          />
          <ClearButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
          />
        </KeyboardLines3Stack>
      </KeyboardLinesStack>
    </>
  );
};

export default Keyboard;
