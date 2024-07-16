import { TextField, styled } from "@mui/material";

export const StyledInput = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  width: "100%",
  margin: 7,
  padding: 15,
  outline: "none",
  border: "2px solid",
  borderColor: theme.palette.secondary.main,

  "& .MuiInputBase-input": {
    color: theme.palette.text.white,
    outline: "none",
    border: "none",
  },
}));
