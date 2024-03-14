import { styled } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledLinkSmall = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.text.white,
  fontSize: 20,
  "&:hover": {
    color: theme.palette.text.secondary,
  },
}));

export const StyledLinkBig = styled(Link)(({ theme }) => ({
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
