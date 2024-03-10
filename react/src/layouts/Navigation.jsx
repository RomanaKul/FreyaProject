import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { Stack, styled } from "@mui/material";
import { theme } from "../theme";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const StyledLink = styled(Link)(({ theme }) => ({
    color: theme.palette.text.white,
    fontSize: 30,
    [theme.breakpoints.down("md")]: {
      fontSize: 25,
    },
    textDecoration: "none",
    fontWeight: "bold",
    "&:hover": {
      color: theme.palette.text.secondary,
    },
  }));

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
        <StyledLink to="/">Основна</StyledLink>
        <StyledLink to="/blog">Блог</StyledLink>
        <StyledLink to="/album">Альбом</StyledLink>
        <StyledLink to="/training">Тренування</StyledLink>
        <StyledLink to="/about">Про нас</StyledLink>
        <StyledLink to="/shop">Магазин</StyledLink>
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
