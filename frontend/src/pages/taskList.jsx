import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import { useState } from "react";
export default function TaskList() {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        {" "}
        <Typography
          gutterBottom
          sx={{
            fontSize: 16,
            textAlign: "left",
            marginRight: "16px",
            color: activeTab === "downloading" ? "#007bff" : "text.primary",
            cursor: "pointer",
          }}
          variant="h3"
          onClick={() => setActiveTab("downloading")}
        >
          下载中
        </Typography>
        <Typography
          gutterBottom
          sx={{
            fontSize: 16,
            textAlign: "left",
            color: activeTab === "completed" ? "#007bff" : "text.primary",
            cursor: "pointer",
          }}
          variant="h3"
          onClick={() => setActiveTab("completed")}
        >
          已完成
        </Typography>
      </Box>
      <Divider sx={{ marginTop: "10px" }} />
    </Box>
  );
}
