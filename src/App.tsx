import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Stack } from "@mui/material";
import { MobileDisplay, Sidebar, WorkflowCreator } from "./components";

const theme = createTheme({
  palette: {
    background: {
      paper: "#ffffff",
      default: "#f8f9fa",
    },
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack direction="row">
        <Sidebar />
        <WorkflowCreator />
        <MobileDisplay />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
