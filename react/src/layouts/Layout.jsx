import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Box } from "@mui/material";
import { theme } from "../theme";

export default function Layout() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />

      <Box
        sx={{
          flexGrow: 1,
          padding: 15,
          [theme.breakpoints.down("md")]: {
            padding: 5,
          },
        }}
      >
        <Outlet />
      </Box>

      <Box
        component="footer"
        sx={{
          bgcolor: theme.palette.primary.light,
          marginTop: "auto",
          padding: 4,
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
}
