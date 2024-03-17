import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { theme } from "../../theme";

export const EditButton = ({ onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <EditIcon
        sx={{
          color: theme.palette.text.white,
          cursor: "pointer",
          "&:hover": { color: theme.palette.secondary.main },
        }}
      />
    </IconButton>
  );
};
