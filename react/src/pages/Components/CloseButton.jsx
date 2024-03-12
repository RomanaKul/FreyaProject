import { theme } from "../../theme";
import { Box, IconButton } from "@mui/material";
import CancelIcon from "@mui/icons-material/Close";

export const CloseButton = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <IconButton
        sx={{
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.primary.main,
          "&:hover": {
            color: theme.palette.secondary.main,
            backgroundColor: theme.palette.primary.main,
          },
        }}
      >
        <CancelIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};
