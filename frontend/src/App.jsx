import "./App.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Outlet } from "react-router";
import { Link } from "react-router";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function App() {
  const [add, setAdd] = useState(false);

  const handleClickAdd = () => {
    setAdd(true);
  };
  const handleCloseAdd = () => {
    setAdd(false);
  };
  return (
    <Container
      disableGutters
      sx={{ px: 0, bgcolor: "#ffffff", height: "100vh" }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          bgcolor: "#ffffff",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: 80,
            height: "100%",
            bgcolor: "#333333",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Link to="/task">
              <FormatListBulletedIcon sx={{ marginTop: "16px" }} />
            </Link>
            <AddIcon
              sx={{ marginTop: "32px", cursor: "pointer" }}
              onClick={handleClickAdd}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Link to="setting">
              <SettingsIcon sx={{ marginBottom: "32px" }} />
            </Link>
            <HelpOutlineIcon sx={{ marginBottom: "32px", cursor: "pointer" }} />
          </Box>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "#ffffff",
            p: 3,
            overflow: "auto",
          }}
        >
          <BootstrapDialog
            onClose={handleCloseAdd}
            aria-labelledby="customized-dialog-title"
            open={add}
          >
            <Button autoFocus onClick={handleCloseAdd}>
              Save changes
            </Button>
          </BootstrapDialog>
          <Outlet />
        </Box>
      </Box>
    </Container>
  );
}

export default App;
