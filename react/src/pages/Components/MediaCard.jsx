import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { theme } from "../../theme";
import YellowButton from "./YellowButton";

export default function MediaCard({ image, title, content }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        bgcolor: theme.palette.primary.light,
        border: "1px solid",
        borderColor: theme.palette.secondary.main,
        borderRadius: 5,
      }}
    >
      <CardMedia
        sx={{
          height: 250,
          borderBottom: "1px solid",
          borderBottomColor: theme.palette.secondary.main,
        }}
        image={image}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h3"
          color={theme.palette.secondary.main}
        >
          {title}
        </Typography>
        <Typography textAlign={"left"}>{content}</Typography>
      </CardContent>
      <CardActions>
        <YellowButton>Читати</YellowButton>
        <YellowButton>Поділитися</YellowButton>
      </CardActions>
    </Card>
  );
}
