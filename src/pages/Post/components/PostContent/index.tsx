import { PostContentContainer } from "./style";

interface PostContentProps {
  content: string;
}

export function PostContent({ content }: PostContentProps) {
  return (
    <PostContentContainer>
      <p>{content}</p>
    </PostContentContainer>
  );
}
