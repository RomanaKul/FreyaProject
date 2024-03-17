import { Box, Stack, Typography } from "@mui/material";
import { theme } from "../../theme";

export default function HomePage() {
  return (
    <Stack direction="row" spacing={2}>
      <Box>
        <Typography variant="h2">Привіт!</Typography>
        <Typography></Typography>
      </Box>
      <Box
        component="img"
        sx={{
          width: 750,
        }}
        src="../images/Freya.png"
      ></Box>
    </Stack>
  );
}
