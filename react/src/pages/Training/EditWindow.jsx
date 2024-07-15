import {
  Box,
  Modal,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { theme } from "../../theme";
import { useState } from "react";
import YellowButton from "../../components/YellowButton";
import { CloseButton } from "../../components/CloseButton";
import { StyledBox } from "../../components/StyledBox";
import { StyledCell } from "../../components/StyledCell";
import { StyledInput } from "../../components/StyledInput";

export default function EditWindow({
  rows,
  open,
  onClose,
  currentRowId,
  setRows,
}) {
  const [currentRow, setCurrentRow] = useState(rows[currentRowId - 1]);

  if (!currentRow) {
    return;
  }

  const updateRow = () => {
    const newRows = rows.slice();
    newRows[currentRowId - 1] = currentRow;
    setRows(newRows);
    onClose();
  };

  const updateCommand = (newValue) => {
    const newRow = { ...currentRow };
    newRow.command = newValue;
    setCurrentRow(newRow);
  };
  const updateComment = (newValue) => {
    const newRow = { ...currentRow };
    newRow.comment = newValue;
    setCurrentRow(newRow);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 2,
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.text.primary,
      }}
    >
      <Modal open={open} onClose={onClose}>
        <StyledBox>
          <CloseButton onClick={onClose} />
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
                      value={currentRow.command}
                      onChange={(event) => updateCommand(event.target.value)}
                    />
                  </StyledCell>
                  <StyledCell>
                    <StyledInput
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      multiline
                      value={currentRow.comment}
                      onChange={(event) => updateComment(event.target.value)}
                    />
                  </StyledCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <YellowButton onClick={updateRow}>Зберегти</YellowButton>
        </StyledBox>
      </Modal>
    </Box>
  );
}
