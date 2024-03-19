import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Stack } from "@mui/material";
import { theme } from "../theme";
import { StyledLinkNav } from "./ui_kit/StyledLink";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = () => (
    <Box
      sx={{
        width: 300,
        bgcolor: theme.palette.primary.light,
        height: "100vh",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <Stack
        p={3}
        spacing={5}
        sx={{
          bgcolor: theme.palette.primary.light,
          minHeight: "100vh",
        }}
      >
        <StyledLinkNav to="/">Основна</StyledLinkNav>
        <StyledLinkNav to="/blog">Блог</StyledLinkNav>
        <StyledLinkNav to="/album">Альбом</StyledLinkNav>
        <StyledLinkNav to="/training">Тренування</StyledLinkNav>
        <StyledLinkNav to="/about">Про нас</StyledLinkNav>
        <StyledLinkNav to="/shop">Магазин</StyledLinkNav>
      </Stack>
    </Box>
  );

  const BurgerMenuIcon = () => {
    return (
      <IconButton
        sx={{
          color: theme.palette.text.white,
          "&:hover": { color: theme.palette.text.secondary },
        }}
      >
        <MenuIcon fontSize="large" />
      </IconButton>
    );
  };

  return (
    <div>
      <Box p={2} onClick={toggleDrawer(true)}>
        <BurgerMenuIcon />
      </Box>

      <Drawer open={open} onClose={toggleDrawer(false)} sx={{ height: "100%" }}>
        <DrawerList />
      </Drawer>
    </div>
  );
}
