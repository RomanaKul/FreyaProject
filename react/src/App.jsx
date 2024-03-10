import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import TrainingPage from "../src/pages/Training/TrainingPage";
import HomePage from "../src/pages/Home/HomePage";
import BlogPage from "../src/pages/Blog/BlogPage";
import AboutPage from "../src/pages/About/AboutPage";
import AlbumPage from "../src/pages/Album/AlbumPage";
import ShopPage from "../src/pages/Shop/ShopPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import { theme } from "./theme";
import { Box } from "@mui/material";

function App() {
  return (
    <Box bgcolor={theme.palette.primary.main}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/album" element={<AlbumPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
