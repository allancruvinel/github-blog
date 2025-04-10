import { Route, Routes } from "react-router-dom";
import { Blog } from "./pages/Blog";
import { PostPage } from "./pages/Post";
import { PaginaNova } from "./pages/NewPageOnlyForTests";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Blog />} />
      <Route path="/post/:id" element={<PostPage />} />
      <Route path="/page" element={<PaginaNova />} />
    </Routes>
  );
};
