import React, { useState, useEffect } from "react";
import LetterButton from "./LetterButton";
import { LetterState } from "./LetterState";

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
  const initalLetterState = Array(26).fill("unused");

  const [letterStates, setLetterStates] = useState<LetterState[]>(
    initalLetterState
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
    let checkedLetterState = letterStates.slice();

    // 正誤判定
    for (let i = 0; i < answer.length; i++) {
      const answeLetter = answer.substr(i, 1);

      if (checkedLetterState[convertToIndex(answeLetter)] === "exactMatch") {
        continue;
      }

      // 完全一致
      if (collectAnswer.substr(i, 1) === answeLetter) {
        checkedLetterState[convertToIndex(answeLetter)] = "exactMatch";
      }
      // 部分一致
      else if (collectAnswer.match(answeLetter)) {
        checkedLetterState[convertToIndex(answeLetter)] = "partialMatch";
      }
      // 不一致（使用済み）
      else {
        checkedLetterState[convertToIndex(answeLetter)] = "used";
      }
    }

    setLetterStates(checkedLetterState);

    //
    // 回答の正誤判定
    //
    let checkedAnswerAnswerLetterStates = answerLetterStates.slice();
    checkedAnswerAnswerLetterStates[0] = "unmatch";
    onSetAnswerLetterStates(checkedAnswerAnswerLetterStates);

    console.log(checkedAnswerAnswerLetterStates);
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
          state={letterStates[convertToIndex("A")]}
          letter="A"
        />
        <LetterButton
          answer={answer}
          onSetAnswer={onSetAnswer}
          state={letterStates[convertToIndex("B")]}
          letter="B"
        />
        <LetterButton
          answer={answer}
          onSetAnswer={onSetAnswer}
          state={letterStates[convertToIndex("C")]}
          letter="C"
        />
        <LetterButton
          answer={answer}
          onSetAnswer={onSetAnswer}
          state={letterStates[convertToIndex("D")]}
          letter="D"
        />
        <LetterButton
          answer={answer}
          onSetAnswer={onSetAnswer}
          state={letterStates[convertToIndex("E")]}
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
