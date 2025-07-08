import "./App.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function App() {
  return (
    <Container disableGutters  sx={{ px: 0, bgcolor: "#ffffff", height: "100vh" }}>
      <Box
        sx={{
          width: 80,
          height: "100%",
          bgcolor: "#333333",
        }}
      />
    </Container>
  );
}

export default App;
