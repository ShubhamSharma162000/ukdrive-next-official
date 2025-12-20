import { createTheme } from "@mui/material/styles";

const ukdriveTheme = createTheme({
  palette: {
    primary: {
      main: "#0f1724",
    },
    secondary: {
      main: "#5986f7ff",
    },
    background: {
      default: "#f7f7f7",
      paper: "#f7f7f7",
    },
  },

  typography: {
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    h1: { fontSize: "2.4rem", fontWeight: 700 },
    h2: { fontSize: "2rem", fontWeight: 600 },
    h3: { fontSize: "1.6rem", fontWeight: 600 },
    body1: { fontSize: "1rem" },
    button: { textTransform: "none" },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "8px 20px",
          fontWeight: 600,
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

export default ukdriveTheme;
