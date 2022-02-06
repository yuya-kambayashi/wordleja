import React from "react";
import { Button } from "@mui/material";
import { BackspaceOutlined } from "@mui/icons-material";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { AnswerLetterState } from "../answer/AnswerLetterState";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ClearButton: {
      backgroundColor: "#D3D6DA",
      width: "105px"
    }
  })
);
type Props = {
  answer: string;
  onSetAnswer: (answer: string) => void;
  answerLetterStates: AnswerLetterState[];
  onSetAnswerLetterStates: (newAnswerLetterStates: AnswerLetterState[]) => void;
};

const ClearButton: React.FC<Props> = ({
  answer,
  onSetAnswer,
  answerLetterStates,
  onSetAnswerLetterStates
}) => {
  const classes = useStyles();

  // 押下されたキーを「empty」状態に変更します
  const setAnswerLetterEmpty = () => {
    let checkedAnswerLetterStates = answerLetterStates.slice();

    checkedAnswerLetterStates[answer.length - 1] = "empty";

    onSetAnswerLetterStates(checkedAnswerLetterStates);
  };

  const handleClickClear = () => {
    onSetAnswer(answer.slice(0, -1));

    setAnswerLetterEmpty();
  };

  return (
    <>
      <Button
        onClick={handleClickClear}
        className={classes.ClearButton}
        style={{ backgroundColor: "#D3D6DA", color: "#000000" }}
      >
        <BackspaceOutlined />
      </Button>
    </>
  );
};

export default ClearButton;
