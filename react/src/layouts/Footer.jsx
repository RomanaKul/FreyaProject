import { Box, Stack, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { theme } from "../theme";
import {
  LocationOn,
  Email,
  Phone,
  Instagram,
  YouTube,
  MusicNote,
} from "@mui/icons-material";
import { StyledLink } from "./ui_kit/StyledLink";

export default function Footer() {
  return (
    <Box>
      <Typography
        variant="h2"
        sx={{ fontWeight: "bold", padding: "10px 120px 30px" }}
      >
        Інфо:
      </Typography>
      <Stack direction="row" justifyContent="space-around">
        <Box>
          <Stack direction="row" spacing={1.5}>
            <Stack color={theme.palette.text.white} spacing={1}>
              <LocationOn />
              <Email />
              <Phone />
            </Stack>
            <Stack>
              <Typography>Україна</Typography>
              <Typography>demo@gmail.com</Typography>
              <Typography>+380 123456789</Typography>
            </Stack>
          </Stack>
        </Box>
        <Box>
          <Stack direction="row" spacing={10}>
            <Stack spacing={1}>
              <StyledLink to="/">Основна</StyledLink>
              <StyledLink to="/blog">Блог</StyledLink>
              <StyledLink to="/album">Альбом</StyledLink>
            </Stack>
            <Stack spacing={1}>
              <StyledLink to="/training">Тренування</StyledLink>
              <StyledLink to="/about">Про нас</StyledLink>
              <StyledLink to="/shop">Магазин</StyledLink>
            </Stack>
          </Stack>
        </Box>
        <Box>
          <Typography>Follow us in social media:</Typography>
          <Stack direction="row" justifyContent="space-evenly" padding={1}>
            <Link>
              <Instagram
                sx={{
                  color: theme.palette.text.white,
                  "&:hover": { color: theme.palette.text.secondary },
                }}
                fontSize="large"
              />
            </Link>
            <Link>
              <YouTube
                sx={{
                  color: theme.palette.text.white,
                  "&:hover": { color: theme.palette.text.secondary },
                }}
                fontSize="large"
              />
            </Link>
            <Link>
              <MusicNote
                sx={{
                  color: theme.palette.text.white,
                  "&:hover": { color: theme.palette.text.secondary },
                }}
                fontSize="large"
              />
            </Link>
          </Stack>
        </Box>
      </Stack>
      <Typography padding="30px 120px">
        &copy; {new Date().getFullYear()} All Rights Reserved.
      </Typography>
    </Box>
  );
}
