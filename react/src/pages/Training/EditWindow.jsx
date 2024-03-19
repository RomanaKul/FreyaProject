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
import { StyledBox } from "../Components/StyledBox";
import { CloseButton } from "../Components/CloseButton";
import YellowButton from "../Components/YellowButton";
import { StyledInput } from "../Components/StyledInput";
import { StyledCell } from "../Components/StyledCell";

export default function EditWindow({ open, onClose }) {
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
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <YellowButton>Зберегти</YellowButton>
        </StyledBox>
      </Modal>
    </Box>
  );
}
