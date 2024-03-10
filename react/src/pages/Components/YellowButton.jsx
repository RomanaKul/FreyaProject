import { Button, styled } from "@mui/material";

const YellowButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.main,
  textTransform: "none",
  padding: "7px 15px",
  border: "3px solid",
  borderColor: theme.palette.primary.main,
  fontSize: 16,
  borderRadius: "10px",
  fontWeight: "bold",
  minWidth: 100,
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
}));

export default YellowButton;
