import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#160c07",
      light: "#1e1009",
    },
    secondary: {
      main: "#ffe600",
      light: "#36271f",
    },
    text: {
      primary: "#160c07",
      secondary: "#ffe600",
      white: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Raleway, Arial",
    allVariants: {
      color: "#ffffff",
      fontSize: 20,
    },
    h1: {
      fontSize: 40,
      fontWeight: "bold",
    },
    h2: {
      fontSize: 35,
      fontWeight: "bold",
      color: "#ffe600",
      marginBottom: 30,
    },
    h3: {
      fontSize: 25,
    },

    body1: {
      fontSize: 20,
    },

    body2: {
      fontSize: 20,
      color: "#160c07",
      fontWeight: "bold",
    },
  },
});
