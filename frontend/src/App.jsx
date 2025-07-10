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
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CloseIcon from "@mui/icons-material/Close";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import TextareaAutosize from '@mui/material/TextareaAutosize';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function App() {
  const [add, setAdd] = useState(false);

  const handleClickAdd = () => {
    setAdd(true);
  };
  const handleCloseAdd = () => {
    setAdd(false);
  };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
          {/* 弹窗1 */}
          <BootstrapDialog
            onClose={handleCloseAdd}
            aria-labelledby="customized-dialog-title"
            open={add}
          >
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="链接任务" {...a11yProps(0)} />
                <Tab label="种子任务" {...a11yProps(1)} />
              </Tabs>
              <CloseIcon
                onClick={handleCloseAdd}
                sx={{ marginRight: "10px" }}
              />
            </Box>
            <CustomTabPanel value={value} index={0}>
              <DialogContent>
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={3}
                  maxRows={5}
                  autoComplete="false"
                  placeholder="添加多个下载链接时，请确保每行只有一个链接(支持磁力链)"
                  style={{ width: 500,height:80 }}
                />
              </DialogContent>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              Item Two
            </CustomTabPanel>

            <DialogActions>
              <Button autoFocus onClick={handleCloseAdd}>
                取消
              </Button>
              <Button autoFocus onClick={handleCloseAdd}>
                确定
              </Button>
            </DialogActions>
          </BootstrapDialog>
          <Outlet />
        </Box>
      </Box>
    </Container>
  );
}

export default App;
