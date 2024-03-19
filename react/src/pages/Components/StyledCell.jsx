import { TableCell, styled } from "@mui/material";

export const StyledCell = styled(TableCell)(({ theme }) => ({
  fontSize: "18px",
  fontWeight: "bold",
  textAlign: "center",
  color: theme.palette.primary.main,
}));
