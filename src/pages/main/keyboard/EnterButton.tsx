import React from "react";
import { Button } from "@mui/material";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    EnterButton: {
      backgroundColor: "#D3D6DA",
      color: "red"
    }
  })
);
type Props = {
  answer: string;
  onSetAnswer: (answer: string) => void;
  onClickEnter: (answer: string) => void;
};

const EnterButtun: React.FC<Props> = ({
  answer,
  onSetAnswer,
  onClickEnter
}) => {
  const classes = useStyles();

  return (
    <>
      <Button
        onClick={onClickEnter}
        //className={classes.EnterButton}
        style={{ backgroundColor: "#D3D6DA" }}

        // disabled={answer.length > 4}
      >
        {"ENTER"}
      </Button>
    </>
  );
};

export default EnterButtun;
