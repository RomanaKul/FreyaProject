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
import { StyledLinkSmall } from "./ui_kit/StyledLink";

export default function Footer() {
  const FooterTypography = styled(Typography)(({ theme }) => ({
    fontSize: 20,
  }));

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
              <FooterTypography>Україна</FooterTypography>
              <FooterTypography>demo@gmail.com</FooterTypography>
              <FooterTypography>+380 123456789</FooterTypography>
            </Stack>
          </Stack>
        </Box>
        <Box>
          <Stack direction="row" spacing={10}>
            <Stack spacing={1}>
              <StyledLinkSmall to="/">Основна</StyledLinkSmall>
              <StyledLinkSmall to="/blog">Блог</StyledLinkSmall>
              <StyledLinkSmall to="/album">Альбом</StyledLinkSmall>
            </Stack>
            <Stack spacing={1}>
              <StyledLinkSmall to="/training">Тренування</StyledLinkSmall>
              <StyledLinkSmall to="/about">Про нас</StyledLinkSmall>
              <StyledLinkSmall to="/shop">Магазин</StyledLinkSmall>
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
