import Table from "./Table";
import { Box, Typography } from "@mui/material";
import { theme } from "../../theme";

export default function TrainingPage() {
  return (
    <Box>
      <Box
        sx={{
          [theme.breakpoints.up("md")]: { width: "62%" },
        }}
      >
        <Typography variant="h2">Тренування</Typography>
        <Typography variant="body1" component="p">
          Для того, щоб зв'язок між вами та пухнастиком був міцним, необхідні
          щоденні тренування, що включають в себе не лише вивчення нових та
          цікавих трюків, а й вдосконалення базових команд, тренування
          витривалості та правильне вигулювання.
        </Typography>
      </Box>

      <Table />
    </Box>
  );
}
