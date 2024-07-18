import {
  Box,
  Menu,
  MenuItem,
  Pagination,
  styled,
  Typography,
} from "@mui/material";
import { theme } from "../../theme";
import ArticlesList from "../../data/ArticlesList";
import MediaCard from "../../components/MediaCard";
import { useState } from "react";
import YellowButton from "../../components/YellowButton";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: theme.palette.secondary.main,
  },
  "& .MuiMenuItem-root": {
    "& .MuiSvgIcon-root": {
      fontSize: 18,
      color: theme.palette.primary.main,
    },
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: 18,
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
}));

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [dateAnchorEl, setDateAnchorEl] = useState(null);
  const [tagAnchorEl, setTagAnchorEl] = useState(null);

  let reversedArticles = ArticlesList.slice().reverse();
  const currentIndex = (currentPage - 1) * 6;

  let visibleArticles = reversedArticles.slice(currentIndex, currentIndex + 6);

  let count = Math.ceil(reversedArticles.length / 6);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleDateClick = (event) => {
    setDateAnchorEl(event.currentTarget);
  };

  const handleTagClick = (event) => {
    setTagAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setDateAnchorEl(null);
    setTagAnchorEl(null);
  };

  return (
    <Box
      sx={{
        padding: 15,
        [theme.breakpoints.down("md")]: {
          padding: 5,
        },
      }}
    >
      <Typography variant="h2">Блог</Typography>
      <Typography paddingBottom={3}>
        Читайте історії з життя Фрейї, а також шукайте статті з порадами щодо
        труднощів, з якими кожен з нас може зіткнутися на шляху до ідеального
        життя з пухнастиком. Знаємо, що інколи собачка може стати справжнім
        випробуванням. Головне не втрачати терпіння!
      </Typography>

      <Box paddingBottom={4}>
        <Typography variant="body3">Сортувати:</Typography>
        <YellowButton onClick={handleDateClick}>За датою</YellowButton>
        <StyledMenu
          anchorEl={dateAnchorEl}
          open={Boolean(dateAnchorEl)}
          onClose={handleClose}
        >
          <StyledMenuItem onClick={handleClose}>Спершу нові</StyledMenuItem>
          <StyledMenuItem onClick={handleClose}>Спершу старі</StyledMenuItem>
        </StyledMenu>

        <YellowButton onClick={handleTagClick}>За тегом</YellowButton>
        <StyledMenu
          anchorEl={tagAnchorEl}
          open={Boolean(tagAnchorEl)}
          onClose={handleClose}
        >
          <StyledMenuItem onClick={handleClose}>#подорож</StyledMenuItem>
          <StyledMenuItem onClick={handleClose}>#поради</StyledMenuItem>
          <StyledMenuItem onClick={handleClose}>#тренування</StyledMenuItem>
        </StyledMenu>
      </Box>

      <Grid2 container spacing={6} columns={{ xs: 2, sm: 8, md: 12 }}>
        {visibleArticles.map((article) => {
          return (
            <Grid2 xs={2} sm={4} md={4} key={article.key}>
              <MediaCard
                image={article.image}
                keyword={article.keyword}
                title={article.title}
                content={article.content}
              />
            </Grid2>
          );
        })}
        <Box width="100%" display="flex" justifyContent="center">
          <Pagination
            count={count}
            page={currentPage}
            onChange={handlePageChange}
            color="secondary"
            sx={{
              "& .MuiPaginationItem-root": {
                color: theme.palette.secondary.main,
              },
            }}
          />
        </Box>
      </Grid2>
    </Box>
  );
}
