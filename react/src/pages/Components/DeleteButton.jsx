import { IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export const DeleteButton = ({ onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <DeleteForeverIcon />
    </IconButton>
  );
};
