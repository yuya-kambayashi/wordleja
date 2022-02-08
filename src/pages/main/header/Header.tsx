import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
  Stack,
  Typography,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@mui/material";
import { HelpOutlineOutlined, BarChart, Settings } from "@mui/icons-material";
import HowToPlayDialog from "./HowToPlayDialog";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Title: {},
    Divider: { marginLeft: "30%", marginRight: "30%", color: "#787C7E" },
    Icon: { fontSize: "3em", color: "#787C7E" }
  })
);
type Props = {};
const Header: React.FC<Props> = () => {
  const classes = useStyles();

  const [openInfo, setOpenInfo] = useState<boolean>(false);

  const handleOpenInfo = () => {
    setOpenInfo(true);
  };

  const handleCloseInfo = () => {
    setOpenInfo(false);
  };

  return (
    <>
      <Stack
        direction="row"
        spacing={20}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <HelpOutlineOutlined
          style={{ fontSize: "2em", color: "#787C7E" }}
          onClick={handleOpenInfo}
        />
        <Typography
          className={classes.Title}
          style={{ fontSize: "3em", fontWeight: "bold" }}
        >
          {"WORDLE"}
        </Typography>
        <Stack direction="row">
          <BarChart
            className={classes.Icon}
            style={{ fontSize: "2em", color: "#787C7E" }}
          />
          <Settings style={{ fontSize: "2em", color: "#787C7E" }} />
        </Stack>
      </Stack>
      <Divider
        className={classes.Divider}
        style={{ marginLeft: "30%", marginRight: "30%" }}
      />
      <HowToPlayDialog open={openInfo} onClose={handleCloseInfo} />
    </>
  );
};

export default Header;
