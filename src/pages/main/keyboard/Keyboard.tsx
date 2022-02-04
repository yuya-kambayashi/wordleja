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

  const handleClickEnter = () => {
    const collectAnswer = "ABCDD";

    //
    // キーボードの正誤判定
    //
    let checkedKeyLetterState = keyLetterStates.slice();
    console.log(checkedKeyLetterState);

    // 正誤判定
    for (let i = 0; i < answer.length; i++) {
      const answeLetter = answer.substr(i, 1);

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

    //
    // 回答の正誤判定
    //
    let checkedAnswerAnswerLetterStates = answerLetterStates.slice();

    for (let i = 0; i < answer.length; i++) {
      const answeLetter = answer.substr(i, 1);

      // 完全一致
      if (collectAnswer.substr(i, 1) === answeLetter) {
        checkedAnswerAnswerLetterStates[i] = "exactMatch";
      }
      // 部分一致
      else if (collectAnswer.match(answeLetter)) {
        checkedAnswerAnswerLetterStates[i] = "partialMatch";
      }
      // 不一致（使用済み）
      else {
        checkedAnswerAnswerLetterStates[i] = "unmatch";
      }
    }

    onSetAnswerLetterStates(checkedAnswerAnswerLetterStates);
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
