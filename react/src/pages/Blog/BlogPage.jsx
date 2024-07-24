import { Box, Pagination, Typography } from "@mui/material";
import { theme } from "../../theme";
import ArticlesList from "../../data/ArticlesList";
import MediaCard from "../../components/MediaCard";
import { useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import BlogTags from "./BlogTags";

export default function BlogPage() {
  const [articles, setArticles] = useState(ArticlesList.slice().reverse());
  const [currentPage, setCurrentPage] = useState(1);

  const currentIndex = (currentPage - 1) * 6;

  let visibleArticles = articles.slice(currentIndex, currentIndex + 6);

  let count = Math.ceil(articles.length / 6);

  const handlePageChange = (_, value) => {
    setCurrentPage(value);
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

      <BlogTags setArticles={setArticles} />

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
