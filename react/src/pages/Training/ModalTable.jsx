import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { theme } from "../../theme";
import { StyledCell } from "../../components/StyledCell";
import { StyledInput } from "../../components/StyledInput";

const ModalTable = ({ command, setCommand, comment, setComment }) => {
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
          <TableRow>
            <StyledCell width={350}>Команда</StyledCell>
            <StyledCell>Коментар</StyledCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ bgcolor: theme.palette.primary.main }}>
          <TableRow>
            <StyledCell>
              <StyledInput
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                multiline
                value={command}
                onChange={(e) => setCommand(e.target.value)}
              />
            </StyledCell>
            <StyledCell>
              <StyledInput
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                multiline
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </StyledCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default ModalTable;
