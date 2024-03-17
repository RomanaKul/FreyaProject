import { Box, Stack, Typography, styled } from "@mui/material";
import { theme } from "../../theme";
import MediaCard from "../Components/MediaCard";
import YellowButton from "../Components/YellowButton";
import { Link } from "react-router-dom";
import { StyledLinkSmall } from "../../layouts/ui_kit/StyledLink";

export default function HomePage() {
  const StyledTypography = styled(Typography)(({ theme }) => ({
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
            хвилинки, а тому в мене завжди є напоготові м'ячик, - я то знаю, що
            це їхня улюблена іграшка!
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
        <Stack direction="row" spacing={5} justifyContent={"space-evenly"}>
          <MediaCard
            image="../images/Home.jpg"
            title="Тут назва статті"
            content="Я приїхала до мами і тата, коли мені було 2 місяці, і відтоді
            розважаю їх, як тільки можу. Я стараюсь не давати їм сумувати ні
            хвилинки, а тому в мене завжди є напоготові м'ячик, - я то знаю, що
            це їхня улюблена іграшка!"
          />
          <MediaCard
            image="../images/Home.jpg"
            title="Тут назва статті"
            content="Я приїхала до мами і тата, коли мені було 2 місяці, і відтоді
            розважаю їх, як тільки можу. Я стараюсь не давати їм сумувати ні
            хвилинки, а тому в мене завжди є напоготові м'ячик, - я то знаю, що
            це їхня улюблена іграшка!"
          />
          <MediaCard
            image="../images/Home.jpg"
            title="Тут назва статті"
            content="Я приїхала до мами і тата, коли мені було 2 місяці, і відтоді
            розважаю їх, як тільки можу. Я стараюсь не давати їм сумувати ні
            хвилинки, а тому в мене завжди є напоготові м'ячик, - я то знаю, що
            це їхня улюблена іграшка!"
          />
        </Stack>
        <YellowButton sx={{ margin: 5 }}>
          <StyledLinkSmall
            sx={{ color: theme.palette.primary.main }}
            to="/blog"
          >
            Дивитись більше
          </StyledLinkSmall>
        </YellowButton>
      </Box>
    </>
  );
}
