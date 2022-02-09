import React, { useState } from "react";
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

type Props = {};
const Header: React.FC<Props> = () => {
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
        <Typography style={{ fontSize: "3em", fontWeight: "bold" }}>
          {"WORDLE"}
        </Typography>
        <Stack direction="row">
          <BarChart style={{ fontSize: "2em", color: "#787C7E" }} />
          <Settings style={{ fontSize: "2em", color: "#787C7E" }} />
        </Stack>
      </Stack>
      <Divider
        style={{ marginLeft: "30%", marginRight: "30%", color: "#787C7E" }}
      />
      <HowToPlayDialog open={openInfo} onClose={handleCloseInfo} />
    </>
  );
};

export default Header;
