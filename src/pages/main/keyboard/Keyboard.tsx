import React, { useState, useEffect } from "react";
import LetterButton from "./LetterButton";
import EnterButton from "./EnterButton";
import ClearButton from "./ClearButton";
import { KeyLetterState } from "./KeyLetterState";
import { Stack } from "@mui/material";
import { AnswerLetterState } from "../answer/AnswerLetterState";
import { styled } from "@mui/material/styles";
import { convertToIndex } from "./KeyboardUtil";

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

  const [answerRow, SetAnswerRow] = useState<number>(0);

  // 文字キーの押下制御
  const [letterButtonDisabled, setLetterButtonDisabled] = useState<boolean>(false);

  useEffect(()=>{
    // 回答の行に対して文字数が超えていたら押下不可とします
    // →　エンター押下で解除
    if (answer.length >= 5 + 5 * answerRow){
      setLetterButtonDisabled(true);
    }
  }, [answer, answerRow])

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
            disabled={letterButtonDisabled}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("W")]}
            letter={"R"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
            disabled={letterButtonDisabled}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("E")]}
            letter={"E"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
            disabled={letterButtonDisabled}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("R")]}
            letter={"R"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
            disabled={letterButtonDisabled}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("T")]}
            letter={"T"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
            disabled={letterButtonDisabled}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("Y")]}
            letter={"Y"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
            disabled={letterButtonDisabled}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("U")]}
            letter={"U"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
            disabled={letterButtonDisabled}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("I")]}
            letter={"I"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
            disabled={letterButtonDisabled}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("O")]}
            letter={"O"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
            disabled={letterButtonDisabled}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("P")]}
            letter={"P"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
            disabled={letterButtonDisabled}
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
            disabled={letterButtonDisabled}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("S")]}
            letter={"S"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
            disabled={letterButtonDisabled}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("D")]}
            letter={"D"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
            disabled={letterButtonDisabled}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("F")]}
            letter={"F"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
            disabled={letterButtonDisabled}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("G")]}
            letter={"G"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
            disabled={letterButtonDisabled}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("H")]}
            letter={"H"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
            disabled={letterButtonDisabled}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("J")]}
            letter={"J"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
            disabled={letterButtonDisabled}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("K")]}
            letter={"K"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
            disabled={letterButtonDisabled}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("L")]}
            letter={"L"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
            disabled={letterButtonDisabled}
          />
        </KeyboardLines2Stack>
        <KeyboardLines3Stack direction="row" spacing={1}>
          <EnterButton
            targetAnswer = {answer.substring(5 * answerRow, 5 + 5 * answerRow)}
            answerRow = {answerRow}
            SetAnswerRow = {SetAnswerRow}
            setLetterButtonDisabled = {setLetterButtonDisabled}
            keyLetterStates = { keyLetterStates }
            setKeyLetterStates = {setKeyLetterStates}
            answerLetterStates = {answerLetterStates}
            onSetAnswerLetterStates = {onSetAnswerLetterStates}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("Z")]}
            letter={"Z"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
            disabled={letterButtonDisabled}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("X")]}
            letter={"X"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
            disabled={letterButtonDisabled}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("C")]}
            letter={"C"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
            disabled={letterButtonDisabled}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("V")]}
            letter={"V"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
            disabled={letterButtonDisabled}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("B")]}
            letter={"B"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
            disabled={letterButtonDisabled}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("N")]}
            letter={"N"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
            disabled={letterButtonDisabled}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("M")]}
            letter={"M"}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
            disabled={letterButtonDisabled}
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
