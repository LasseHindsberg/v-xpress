import "./App.scss";
import { Router } from "@reach/router";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import HomePage from "./views/HomePage";

export default function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#BC04BF",
        contrastText: "#dfdfdf",
      },
      secondary: {
        main: "#F22294",
        contrastText: "#dfdfdf",
      },
      text: {
        primary: "#dfdfdf",
      },
      error: {
        main: "#A6032F",
      },
      warning: {
        main: "#F28C0F",
      },
      success: {
        main: "#0FBF5C",
      },
    type: 'dark',
    background: {
    paper: "#1d1c35"
    },
    typography: {
      fontFamily: "Raleway",
    },
  }
});

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
            <HomePage default path="/home" />
        </Router>
      </ThemeProvider>
    </div>
  );
}
