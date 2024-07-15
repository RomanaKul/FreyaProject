import { IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { theme } from "../theme";

export const DeleteButton = ({ onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <DeleteForeverIcon
        sx={{
          color: theme.palette.text.white,
          cursor: "pointer",
          "&:hover": { color: theme.palette.secondary.main },
        }}
      />
    </IconButton>
  );
};
