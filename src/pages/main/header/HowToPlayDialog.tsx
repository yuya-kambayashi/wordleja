import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import {
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@mui/material";

const useStyles = makeStyles((theme: Theme) => createStyles({}));
type Props = {
  open: boolean;
  onClose: () => void;
};
const HowToPlayDialog: React.FC<Props> = ({ open, onClose }) => {
  const classes = useStyles();

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {
          <DialogTitle id="how-to-play">{"HOW TO PLAY"}</DialogTitle>
          // <DialogContent>
          //   <DialogContentText id="how-to-play-dialog-description">
          //     {"Guess the WORDLE in 6 tries."}
          //   </DialogContentText>
          // </DialogContent>
          // <DialogActions>
          //   <Button onClick={handleCloseInfo}>Disagree</Button>
          //   <Button onClick={handleCloseInfo} autoFocus>
          //     Agree
          //   </Button>
          // </DialogActions>
        }
      </Dialog>
    </>
  );
};

export default HowToPlayDialog;
