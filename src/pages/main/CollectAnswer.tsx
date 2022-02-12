import React, {useEffect} from "react";

import {answerCandidates} from "./AnswerCandidates";

type Props = {
  onSetCollectAnswer: (collectAnswer: string) => void;
};
const CollectAnswer: React.FC<Props> = ({ onSetCollectAnswer }) => {

  const getRandomIndex = (min : number, max : number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  useEffect(() => {
    onSetCollectAnswer(answerCandidates[getRandomIndex(0, answerCandidates.length)]);
  }, [])

  return <></>;
};

export default CollectAnswer;
