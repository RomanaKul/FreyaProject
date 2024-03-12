import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Stack } from "@mui/material";
import { theme } from "../theme";
import { StyledLinkBig } from "./UI Kit/StyledLink";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
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
        <StyledLinkBig to="/">Основна</StyledLinkBig>
        <StyledLinkBig to="/blog">Блог</StyledLinkBig>
        <StyledLinkBig to="/album">Альбом</StyledLinkBig>
        <StyledLinkBig to="/training">Тренування</StyledLinkBig>
        <StyledLinkBig to="/about">Про нас</StyledLinkBig>
        <StyledLinkBig to="/shop">Магазин</StyledLinkBig>
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
        {DrawerList}
      </Drawer>
    </div>
  );
}
