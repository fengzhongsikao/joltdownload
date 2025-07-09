import Box from "@mui/material/Box";
import Typography  from "@mui/material/Typography";
import Divider  from "@mui/material/Divider";
export default function Setting() {
  return (
    <Box>
      <Typography
        gutterBottom
        sx={{ color: "text.primary", fontSize: 16, textAlign: "left" }}
        variant="h3"
      >
        基础设置
      </Typography>
      <Divider></Divider>
    </Box>
  );
}
