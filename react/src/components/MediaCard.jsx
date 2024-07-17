import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { theme } from "../theme";
import YellowButton from "./YellowButton";

export default function MediaCard({ image, title, content }) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 345,
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
        <Typography
          sx={{
            textAlign: "left",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 8,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {content}
        </Typography>
      </CardContent>
      <CardActions sx={{ mt: "auto" }}>
        <YellowButton>Читати</YellowButton>
        <YellowButton>Поділитися</YellowButton>
      </CardActions>
    </Card>
  );
}
