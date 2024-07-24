import { Box, Menu, MenuItem, styled, Typography } from "@mui/material";
import YellowButton from "../../components/YellowButton";
import ArticlesList from "../../data/ArticlesList";
import { useState } from "react";
import PropTypes from "prop-types";

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

export default function BlogTags({ setArticles }) {
  const [dateAnchorEl, setDateAnchorEl] = useState(null);
  const [tagAnchorEl, setTagAnchorEl] = useState(null);

  const handleDateClick = (event) => {
    setDateAnchorEl(event.currentTarget);
  };

  const handleTagClick = (event) => {
    setTagAnchorEl(event.currentTarget);
  };

  const handleDateSort = (date) => {
    setDateAnchorEl(null);
    setTagAnchorEl(null);
    if (date === "new") {
      setArticles(ArticlesList.slice().reverse());
    } else {
      setArticles(ArticlesList);
    }
  };

  const handleTagSort = (tag) => {
    setDateAnchorEl(null);
    setTagAnchorEl(null);
    switch (tag) {
      case "подорож":
        setArticles(
          ArticlesList.filter(
            (article) => article.keyword === "#подорож"
          ).reverse()
        );
        break;
      case "поради":
        setArticles(
          ArticlesList.filter(
            (article) => article.keyword === "#поради"
          ).reverse()
        );
        break;
      case "тренування":
        setArticles(
          ArticlesList.filter(
            (article) => article.keyword === "#тренування"
          ).reverse()
        );
        break;
      default:
        setArticles(ArticlesList.slice().reverse());
    }
  };

  const handleClose = () => {
    setDateAnchorEl(null);
    setTagAnchorEl(null);
  };

  return (
    <Box paddingBottom={4}>
      <Typography variant="body3">Сортувати:</Typography>
      <YellowButton onClick={handleDateClick}>За датою</YellowButton>
      <StyledMenu
        anchorEl={dateAnchorEl}
        open={Boolean(dateAnchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={() => handleDateSort("new")}>
          Спершу нові
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleDateSort("old")}>
          Спершу старі
        </StyledMenuItem>
      </StyledMenu>

      <YellowButton onClick={handleTagClick}>За тегом</YellowButton>
      <StyledMenu
        anchorEl={tagAnchorEl}
        open={Boolean(tagAnchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem
          onClick={() => {
            handleTagSort("подорож");
          }}
        >
          #подорож
        </StyledMenuItem>
        <StyledMenuItem
          onClick={() => {
            handleTagSort("поради");
          }}
        >
          #поради
        </StyledMenuItem>
        <StyledMenuItem
          onClick={() => {
            handleTagSort("тренування");
          }}
        >
          #тренування
        </StyledMenuItem>
        <StyledMenuItem
          onClick={() => {
            handleTagSort();
          }}
        >
          показати всі
        </StyledMenuItem>
      </StyledMenu>
    </Box>
  );
}

BlogTags.propTypes = {
  setArticles: PropTypes.func,
};
