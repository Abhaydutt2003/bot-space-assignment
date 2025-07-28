import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { AppProvider } from "./Providers/AppProvider";
import BaseView from "./Views/BaseView";

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
      <AppProvider>
        <BaseView />
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
