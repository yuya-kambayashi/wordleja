import React, { useState, useEffect } from "react";
import LetterButton from "./LetterButton";
import { KeyLetterState } from "./KeyLetterState";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Stack } from "@mui/material";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Keyboard: {
      position: "absolute",
      top: "90%",
      left: "50%",
      transform: "translate(-50%, -50%)"
      //alignItems: "flex-start"
    }
  })
);
type Props = {
  answer: string;
  onSetAnswer: (answer: string) => void;
  answerLetterStates: string[];
  onSetAnswerLetterStates: (newAnswerLetterStates: string[]) => void;
};
const Keyboard: React.FC<Props> = ({
  answer,
  onSetAnswer,
  answerLetterStates,
  onSetAnswerLetterStates
}) => {
  const classes = useStyles();

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
    // console.log("checkedKeyLetterState start");
    // console.log(checkedKeyLetterState);
    // console.log(answer);
    // console.log(targetAnswer);
    // console.log(answerRow);

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

    //console.log("checkedKeyLetterState end");
    //console.log(checkedKeyLetterState);

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

  const handleClickEnter = () => {
    const collectAnswer = "ABCDD";
    const targetAnswer = answer.substring(5 * answerRow, 5 + 5 * answerRow);

    checkKeyLetter(collectAnswer, targetAnswer);

    checkAnswerLetter(collectAnswer, targetAnswer);

    SetAnswerRow(answerRow + 1);
  };

  const handleClickClear = () => {
    onSetAnswer(answer.slice(0, -1));
  };

  return (
    <>
      <Stack direction="column" spacing={3}>
        <Stack direction="row" spacing={1} className={classes.Keyboard}>
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("Q")]}
            letter={"Q"}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("W")]}
            letter={"R"}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("E")]}
            letter={"E"}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("R")]}
            letter={"R"}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("T")]}
            letter={"T"}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("Y")]}
            letter={"Y"}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("U")]}
            letter={"U"}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("I")]}
            letter={"I"}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("O")]}
            letter={"O"}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("P")]}
            letter={"P"}
          />
        </Stack>
        <Stack direction="row" spacing={1} className={classes.Keyboard}>
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("A")]}
            letter={"A"}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("S")]}
            letter={"S"}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("D")]}
            letter={"D"}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("F")]}
            letter={"F"}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("G")]}
            letter={"G"}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("H")]}
            letter={"H"}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("J")]}
            letter={"J"}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("K")]}
            letter={"K"}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("L")]}
            letter={"L"}
          />
        </Stack>
        <Stack direction="row" spacing={1} className={classes.Keyboard}>
          <button
            onClick={() => handleClickEnter()}
            // disabled={answer.length !== 5}
          >
            {"ENTER"}
          </button>
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("Z")]}
            letter={"Z"}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("X")]}
            letter={"X"}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("C")]}
            letter={"C"}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("V")]}
            letter={"V"}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("B")]}
            letter={"B"}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("N")]}
            letter={"N"}
          />
          <LetterButton
            answer={answer}
            onSetAnswer={onSetAnswer}
            state={keyLetterStates[convertToIndex("M")]}
            letter={"M"}
          />
          <button onClick={() => handleClickClear()}>{"CLEAR"}</button>
        </Stack>
      </Stack>
    </>
  );
};

export default Keyboard;
