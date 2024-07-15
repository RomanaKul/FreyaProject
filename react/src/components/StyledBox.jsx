import { Box, styled } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  backgroundColor: theme.palette.secondary.light,
  border: "2px solid ",
  borderRadius: "10px",
  borderColor: theme.palette.secondary.main,
  padding: "30px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));
