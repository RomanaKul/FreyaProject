import { Box } from "@mui/material";
import { theme } from "../../theme";

export default function BlogPage() {
  return (
    <Box
      sx={{
        padding: 15,
        [theme.breakpoints.down("md")]: {
          padding: 5,
        },
      }}
    >
      <h2>Blog</h2>
    </Box>
  );
}
