import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  styled,
  TextField,
} from "@mui/material";
import { theme } from "../../theme";

const StyledCell = styled(TableCell)(({ theme }) => ({
  fontSize: "18px",
  fontWeight: "bold",
  textAlign: "center",
  color: theme.palette.primary.main,
}));

const StyledInput = styled(TextField)(({ theme }) => ({
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

const ModalTable = () => {
  return (
    <TableContainer
      sx={{
        border: "1px solid",
        borderColor: theme.palette.text.white,
        margin: 4,
      }}
    >
      <Table>
        <TableHead
          sx={{
            bgcolor: theme.palette.secondary.main,
          }}
        >
          <StyledCell width={350}>Команда</StyledCell>
          <StyledCell>Коментар</StyledCell>
        </TableHead>
        <TableBody sx={{ bgcolor: theme.palette.primary.main }}>
          <StyledCell>
            <StyledInput
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              multiline
            />
          </StyledCell>
          <StyledCell>
            <StyledInput
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              multiline
            />
          </StyledCell>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default ModalTable;
