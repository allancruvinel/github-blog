import { GithubIssue } from "../../../../contexts/PostsContext";
import { PostContainerLink, PostText, PostTitle } from "./style";

interface PostProps {
  post: GithubIssue;
}

export const Post = ({ post }: PostProps) => {
  console.log("post on Post component", post);
  return (
    <PostContainerLink to={`/post/${post.number}`}>
      <div>
        <PostTitle>{post.title}</PostTitle>
        <span>Há 1 dia</span>
      </div>
      <PostText>{post.body}</PostText>
    </PostContainerLink>
  );
};
