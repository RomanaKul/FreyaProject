import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#160c07",
      light: "#1e1009",
    },
    secondary: {
      main: "#ffff00",
    },
    text: {
      primary: "#160c07",
      secondary: "#ffff00",
      white: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Raleway, Arial",
    allVariants: {
      color: "#ffffff",
    },
    h1: {
      fontSize: 40,
      fontWeight: "bold",
    },
    h2: {
      fontSize: 35,
      fontWeight: "bold",
      color: "#ffff00",
    },
    h3: {
      fontSize: 25,
    },

    body1: {
      fontSize: 20,
    },
  },
});
