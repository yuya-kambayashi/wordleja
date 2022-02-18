import React, { useState, useEffect, useContext, useReducer } from "react";
import LetterButton from "./LetterButton";
import EnterButton from "./EnterButton";
import ClearButton from "./ClearButton";
import { KeyLetterState } from "./KeyLetterState";
import { Snackbar, Stack } from "@mui/material";
import { AnswerLetterState } from "../answer/AnswerLetterState";
import { styled } from "@mui/material/styles";
import { convertToIndex } from "./KeyboardUtil";
import { CollectAnswerContext } from "../Main";
import { KeyAction, reducerKeys } from "./KeyboardReducer";

const KeyboardLinesStack = styled(Stack)({
  position: "absolute",
  top: "90%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  alignItems: "flex-start",
});

const LettersErrorSnackbar = styled(Snackbar)({
  marginTop: "300px",
});

const KeyboardLines1Stack = styled(Stack)({});
const KeyboardLines2Stack = styled(Stack)({ paddingLeft: "40px" });
const KeyboardLines3Stack = styled(Stack)({});

const initailLetterState = {
  letters: "",
};

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
  onSetAnswerLetterStates,
}) => {
  // 各キーの状態の配列
  const initalKeyLetterState = Array(26).fill("unused");

  const [keyLetterStates, setKeyLetterStates] =
    useState<KeyLetterState[]>(initalKeyLetterState);

  const [answerRow, SetAnswerRow] = useState<number>(0);

  // 文字キーの押下制御
  const [letterButtonDisabled, setLetterButtonDisabled] =
    useState<boolean>(false);

  useEffect(() => {
    // 回答の行に対して文字数が超えていたら押下不可とします
    // →　エンター押下で解除
    console.log(answer);
    if (answer.length >= 5 + 5 * answerRow) {
      console.log(letterButtonDisabled);
      setLetterButtonDisabled(true);
    }
  }, [answer, answerRow]);

  // 文字数チェックエラーのハンドラ
  const [openFewLettersError, setOpenFewLettersError] = React.useState(false);

  const handleCloseFewLettersError = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenFewLettersError(false);
  };

  // 回答の辞書チェックエラーのハンドラ
  const [openInvalidAnswerError, setOpenInvalidAnswerError] =
    React.useState(false);

  const handleCloseInvalidAnswerError = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenInvalidAnswerError(false);
  };

  // 正答表示のハンドラ
  const [openCollectAnswer, setOpenCollectAnswer] = React.useState(false);

  const handleOpenCollectAnswer = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenCollectAnswer(false);
  };

  const collectAnswer = useContext(CollectAnswerContext) as string;

  const [letters, dispachLetter] = useReducer(reducerKeys, initailLetterState);

  return (
    <>
      <LettersErrorSnackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openFewLettersError}
        autoHideDuration={1000}
        message="Not enough letters"
        onClose={handleCloseFewLettersError}
      />
      <LettersErrorSnackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openInvalidAnswerError}
        autoHideDuration={1000}
        message="Not in word list"
        onClose={handleOpenCollectAnswer}
      />
      <LettersErrorSnackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openCollectAnswer}
        message={collectAnswer}
        onClose={handleOpenCollectAnswer}
      />
      <div>
        <p>{letters.letters}</p>
        <button onClick={() => dispachLetter(KeyAction.INPUT)}>INPUT</button>
        <button onClick={() => dispachLetter(KeyAction.DELETE)}>DELETE</button>
      </div>
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
            targetAnswer={answer.substring(5 * answerRow, 5 + 5 * answerRow)}
            answerRow={answerRow}
            SetAnswerRow={SetAnswerRow}
            setLetterButtonDisabled={setLetterButtonDisabled}
            keyLetterStates={keyLetterStates}
            setKeyLetterStates={setKeyLetterStates}
            answerLetterStates={answerLetterStates}
            onSetAnswerLetterStates={onSetAnswerLetterStates}
            setOpenFewLettersError={setOpenFewLettersError}
            setOpenInvalidAnswerError={setOpenInvalidAnswerError}
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
            answerRow={answerRow}
            setLetterButtonDisabled={setLetterButtonDisabled}
          />
        </KeyboardLines3Stack>
      </KeyboardLinesStack>
    </>
  );
};

export default Keyboard;
