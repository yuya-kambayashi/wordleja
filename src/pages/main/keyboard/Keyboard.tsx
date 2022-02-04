import React, { useState, useEffect } from "react";
import LetterButton from "./LetterButton";
import { KeyLetterState } from "./KeyLetterState";

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
      <div>{"Keyboard:"}</div>
      <div>
        <LetterButton
          answer={answer}
          onSetAnswer={onSetAnswer}
          state={keyLetterStates[convertToIndex("A")]}
          letter="A"
        />
        <LetterButton
          answer={answer}
          onSetAnswer={onSetAnswer}
          state={keyLetterStates[convertToIndex("B")]}
          letter="B"
        />
        <LetterButton
          answer={answer}
          onSetAnswer={onSetAnswer}
          state={keyLetterStates[convertToIndex("C")]}
          letter="C"
        />
        <LetterButton
          answer={answer}
          onSetAnswer={onSetAnswer}
          state={keyLetterStates[convertToIndex("D")]}
          letter="D"
        />
        <LetterButton
          answer={answer}
          onSetAnswer={onSetAnswer}
          state={keyLetterStates[convertToIndex("E")]}
          letter="E"
        />
        <div>{answer}</div>
        <button
          onClick={() => handleClickEnter()}
          // disabled={answer.length !== 5}
        >
          {"ENTER"}
        </button>
        <button onClick={() => handleClickClear()}>{"CLEAR"}</button>
      </div>
    </>
  );
};

export default Keyboard;
