import React from "react";
import { IconButton, Button } from "@mui/material";
import { BackspaceOutlined } from "@mui/icons-material";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ClearButton: {
      backgroundColor: "#D3D6DA",
      color: "red"
    }
  })
);
type Props = {
  answer: string;
  onSetAnswer: (answer: string) => void;
  //onClickClear: (answer: string) => void;
};

const ClearButton: React.FC<Props> = ({
  answer,
  onSetAnswer
  //onClickClear
}) => {
  const classes = useStyles();

  const handleClickClear = () => {
    onSetAnswer(answer.slice(0, -1));
  };

  return (
    <>
      <Button
        onClick={handleClickClear}
        //className={classes.ClearButton}
        style={{ backgroundColor: "#D3D6DA" }}
      >
        <BackspaceOutlined />
      </Button>
    </>
  );
};

export default ClearButton;
