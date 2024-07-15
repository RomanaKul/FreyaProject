import { useState } from "react";
import { Modal } from "@mui/material";
import ModalTable from "./ModalTable";
import YellowButton from "../../components/YellowButton";
import { CloseButton } from "../../components/CloseButton";
import { StyledBox } from "../../components/StyledBox";

export default function ModalWindow({ rows, setRows }) {
  const [open, setOpen] = useState(false);
  const [command, setCommand] = useState("");
  const [comment, setComment] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSave = () => {
    const newRow = {
      id: rows.length + 1,
      command: command,
      comment: comment,
    };

    const newRows = rows.slice();
    newRows.push(newRow);

    setRows(newRows);
    setCommand("");
    setComment("");
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
          <ModalTable
            command={command}
            setCommand={setCommand}
            comment={comment}
            setComment={setComment}
          />

          <YellowButton onClick={handleSave}>Зберегти</YellowButton>
        </StyledBox>
      </Modal>
    </div>
  );
}
