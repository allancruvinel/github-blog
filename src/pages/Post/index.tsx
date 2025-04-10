import { useEffect, useState } from "react";
import { PostContent } from "./components/PostContent";
import { PostInfo } from "./components/PostInfo";
import { PostPageContainer } from "./style";
import { githubApi } from "../../lib/axios";
import { GithubIssue } from "../../contexts/PostsContext";
import { useParams } from "react-router-dom";
export const PostPage = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<GithubIssue>({
    user: {
      login: "",
    },
    created_at: new Date(),
    comments: 0,
    body: "",
    html_url: "",
    title: "",
    id: 0,
    number: 0,
  });
  async function loadPostFromIssue() {
    const responsePost = await githubApi.get<GithubIssue>(
      `/repos/allancruvinel/github-blog/issues/${id}`
    );
    setPost(responsePost.data);
  }
  useEffect(() => {
    loadPostFromIssue();
  }, []);

  return (
    <PostPageContainer>
      <PostInfo post={post} />
      <PostContent content={post.body} />
    </PostPageContainer>
  );
};
