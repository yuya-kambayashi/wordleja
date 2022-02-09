import React from "react";

type Props = {
  onSetCollectAnswer: (collectAnswer: string) => void;
};
const CollectAnswer: React.FC<Props> = ({ onSetCollectAnswer }) => {
  onSetCollectAnswer("YIELD");

  return <></>;
};

export default CollectAnswer;
