import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
import { theme } from "../theme";

export default function Search() {
  return (
    <Box p={2}>
      <SearchIcon
        fontSize="large"
        sx={{ cursor: "pointer", color: theme.palette.text.white }}
      />
    </Box>
  );
}
