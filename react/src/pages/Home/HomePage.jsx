import { useState } from "react";
import { Box, Stack, Typography, styled } from "@mui/material";
import { theme } from "../../theme";
import YellowButton from "../../components/YellowButton";
import { StyledLink } from "../../layouts/ui_kit/StyledLink";
import MediaCard from "../../components/MediaCard";
import Slider from "../../components/Slider";
import ArticlesList from "../../data/ArticlesList";

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const StyledTypography = styled(Typography)(() => ({
    paddingBottom: "20px",
  }));

  return (
    <>
      <Stack direction="row" spacing={2}>
        <Box
          sx={{
            padding: 15,
            [theme.breakpoints.down("md")]: {
              padding: 5,
            },
          }}
        >
          <Typography variant="h2">Привіт!</Typography>
          <StyledTypography>
            Мене звати Фрейя, кажуть, є така богиня, але я ще та хуліганка!
          </StyledTypography>
          <StyledTypography>
            Я приїхала до мами і тата, коли мені було 2 місяці, і відтоді
            розважаю їх, як тільки можу. Я стараюсь не давати їм сумувати ні
            хвилинки, а тому в мене завжди є напоготові м&apos;ячик, - я то
            знаю, що це їхня улюблена іграшка!
          </StyledTypography>
          <StyledTypography>
            Народилась я на фермі, через що мені чужі всі ці міські звичаї. Не
            розумію, що такого веселого в гулянні на повідку, і де поділися мої
            овечки! А ще мене вчать багатьом трюкам, - я ж їм не клоун... Але
            мама дуже радіє, коли я виконую їх, тому я стараюсь
            старатись...інколи.
          </StyledTypography>
        </Box>
        <Box
          component="img"
          sx={{
            width: 550,
          }}
          src="../images/main.jpg"
        ></Box>
      </Stack>
      <Box
        sx={{
          bgcolor: theme.palette.secondary.main,
          height: 70,
          marginTop: 5,
          marginBottom: 5,
        }}
      />
      <Box textAlign={"center"}>
        <Typography variant="h2">Нещодавні статті:</Typography>
        <Slider currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}>
          {ArticlesList.slice(ArticlesList.length - 5).map((article) => {
            return (
              <MediaCard
                key={article.key}
                image={article.image}
                keyword={article.keyword}
                title={article.title}
                content={article.content}
              />
            );
          })}
        </Slider>
        <YellowButton sx={{ margin: 5 }}>
          <StyledLink sx={{ color: theme.palette.primary.main }} to="/blog">
            Дивитись більше
          </StyledLink>
        </YellowButton>
      </Box>
    </>
  );
}
