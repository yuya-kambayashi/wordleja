import React, { useState, useEffect, useContext, useReducer } from "react";
import LetterButton from "./LetterButton";
import EnterButton from "./EnterButton";
import DeleteButton from "./DeleteButton";
import { Snackbar, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { CollectAnswerContext } from "../Main";
import { KeyActionType, KeyAction } from "./KeyboardReducer";
import { letterStateType } from "../../main/Main";
import { convertToIndex } from "./KeyboardUtil";
import { AlertActionType, reducerAlerts } from "./AlertsReducer";

export type AlertType = {
  fewLettersError: boolean;
  invalidAnswerError: boolean;
  incorrectlyEndError: boolean;
};

const initailAlerts: AlertType = {
  fewLettersError: false,
  invalidAnswerError: false,
  incorrectlyEndError: false,
};

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
  dispatchLetter: (action: KeyAction) => void;
  letterState: letterStateType;
};

const Keyboard: React.FC<Props> = ({ dispatchLetter, letterState }) => {
  const [answerRow, SetAnswerRow] = useState<number>(0);

  // 文字キーの押下制御
  const [letterButtonDisabled, setLetterButtonDisabled] =
    useState<boolean>(false);

  useEffect(() => {
    // 回答の行に対して文字数が超えていたら押下不可とします
    // →　エンター押下で解除
    console.log(letterState.answer);
    if (letterState.answer.length >= 5 + 5 * answerRow) {
      console.log(letterButtonDisabled);
      setLetterButtonDisabled(true);
    }
  }, [letterState.answer, answerRow]);

  // エラーハンドリング
  const [alerts, dispatchAlerts] = useReducer(reducerAlerts, initailAlerts);

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
          state={letterState.keyLetterStates[convertToIndex(letter)]}
          letter={letter}
          disabled={letterButtonDisabled}
          dispatchLetter={dispatchLetter}
        />
      );
    });
    return items;
  };

  return (
    <>
      <LettersErrorSnackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={alerts.fewLettersError}
        autoHideDuration={1000}
        message="Not enough letters"
        onClose={() =>
          dispatchAlerts({
            type: AlertActionType.FEWLETTERS,
            value: false,
          })
        }
      />
      <LettersErrorSnackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={alerts.invalidAnswerError}
        autoHideDuration={1000}
        message="Not in word list"
        onClose={() =>
          dispatchAlerts({
            type: AlertActionType.INVALIDANSWER,
            value: false,
          })
        }
      />
      <LettersErrorSnackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={alerts.incorrectlyEndError}
        message={collectAnswer}
        onClose={() =>
          dispatchAlerts({
            type: AlertActionType.INCORRECTLYEND,
            value: false,
          })
        }
      />
      <KeyboardLinesStack direction="column" spacing={1}>
        <KeyboardLines1Stack direction="row" spacing={1}>
          {keys(letters1)}
        </KeyboardLines1Stack>
        <KeyboardLines2Stack direction="row" spacing={1}>
          {keys(letters2)}
        </KeyboardLines2Stack>
        <KeyboardLines3Stack direction="row" spacing={1}>
          <EnterButton
            answerRow={answerRow}
            SetAnswerRow={SetAnswerRow}
            setLetterButtonDisabled={setLetterButtonDisabled}
            dispatchLetter={dispatchLetter}
            letterState={letterState}
            dispatchAlerts={dispatchAlerts}
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
