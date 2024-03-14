import { useState } from "react";
import { Box, Modal, styled } from "@mui/material";
import YellowButton from "../Components/YellowButton";
import { theme } from "../../theme";
import { CloseButton } from "../Components/CloseButton";
import ModalTable from "./ModalTable";

const StyledBox = styled(Box)(({ theme }) => ({
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

export default function ModalWindow({ rows, setRows }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSave = () => {
    const newRow = {
      id: 4,
      command: "Змійка",
      comment: "Вивчили",
      edit: "Edit",
      delete: "Delete",
    };

    const newRows = rows.slice();
    newRows.push(newRow);

    setRows(newRows);
  };

  return (
    <div>
      <YellowButton onClick={handleOpen}>Додати команду</YellowButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledBox>
          <CloseButton onClick={handleClose} />
          <ModalTable />

          <YellowButton onClick={handleSave}>Зберегти</YellowButton>
        </StyledBox>
      </Modal>
    </div>
  );
}
