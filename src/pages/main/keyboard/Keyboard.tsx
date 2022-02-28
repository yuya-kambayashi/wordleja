import React, { useState, useEffect, useContext } from "react";
import LetterButton from "./LetterButton";
import EnterButton from "./EnterButton";
import EnterButton2 from "./EnterButton2";
import DeleteButton from "./DeleteButton";
import { KeyLetterState } from "./KeyLetterState";
import { Snackbar, Stack } from "@mui/material";
import { AnswerLetterState } from "../answer/AnswerLetterState";
import { styled } from "@mui/material/styles";
import { CollectAnswerContext } from "../Main";
import { KeyActionType, KeyAction } from "./KeyboardReducer";
import { letterStateType } from "../../main/Main";

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

type Props = {
  answer: string;
  answerLetterStates: AnswerLetterState[];
  onSetAnswerLetterStates: (newAnswerLetterStates: AnswerLetterState[]) => void;
  dispatchLetter: (action: KeyAction) => void;
  letterState: letterStateType;
};

const Keyboard: React.FC<Props> = ({
  answer,
  answerLetterStates,
  onSetAnswerLetterStates,
  dispatchLetter,
  letterState,
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

  // 削除キーの押下制御
  const [deleteButtonDisabled, setDeleteButtonDisabled] =
    useState<boolean>(false);

  useEffect(() => {
    if (letterState.answer.length <= answerRow * 5) {
      setDeleteButtonDisabled(true);
      return;
    }
    setDeleteButtonDisabled(false);
  }, [letterState.answer, answerRow]);

  const collectAnswer = useContext(CollectAnswerContext) as string;

  const letters1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const letters2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const letters3 = ["Z", "X", "C", "V", "B", "N", "M"];
  const keys = (letters: string[]) => {
    const items: JSX.Element[] = [];
    letters.forEach((letter) => {
      items.push(
        <LetterButton
          state={"unused"}
          letter={letter}
          disabled={letterButtonDisabled}
          dispatchLetter={dispatchLetter}
        />
      );
    });
    console.log(items);

    return items;
  };

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
        <p>{letterState.answer}</p>
        <p>{letterState.answerLetterStates}</p>
        <button
          onClick={() =>
            dispatchLetter({ type: KeyActionType.INPUT, target: "B" })
          }
        >
          INPUT_B
        </button>
        <button onClick={() => dispatchLetter({ type: KeyActionType.DELETE })}>
          DELETE
        </button>
      </div>

      <KeyboardLinesStack direction="column" spacing={1}>
        <KeyboardLines1Stack direction="row" spacing={1}>
          {keys(letters1)}
        </KeyboardLines1Stack>
        <KeyboardLines2Stack direction="row" spacing={1}>
          {keys(letters2)}
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
          <EnterButton2
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
            dispatchLetter={dispatchLetter}
          />
          {keys(letters3)}
          <DeleteButton
            setLetterButtonDisabled={setLetterButtonDisabled}
            disabled={deleteButtonDisabled}
            dispatchLetter={dispatchLetter}
          />
        </KeyboardLines3Stack>
      </KeyboardLinesStack>
    </>
  );
};

export default Keyboard;
