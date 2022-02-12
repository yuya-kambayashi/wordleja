import React, {useEffect} from "react";

type Props = {
  onSetCollectAnswer: (collectAnswer: string) => void;
};
const CollectAnswer: React.FC<Props> = ({ onSetCollectAnswer }) => {

  const candidates = ["ABOUT", "YIELD", "STORY"];

  const getRandomIndex = (min : number, max : number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  useEffect(() => {


    onSetCollectAnswer(candidates[getRandomIndex(0, candidates.length)]);
  }, [])

  return <></>;
};

export default CollectAnswer;
