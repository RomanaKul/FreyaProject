import { Box, Stack, Typography } from "@mui/material";
import Search from "./Search";
import Navigation from "./Navigation";
import { theme } from "../theme";

export default function Header() {
  return (
    <Box bgcolor={theme.palette.primary.light}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Navigation />
        <Typography variant="h1">Фрейя</Typography>
        <Search />
      </Stack>
    </Box>
  );
}
