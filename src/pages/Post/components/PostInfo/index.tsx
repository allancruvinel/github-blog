import {
  faCalendarDay,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ContactContainer,
  PostInfoContainer,
  PostInfoTitle,
  VoltarButton,
} from "./style";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ExternalLink } from "../../../../components/ExternalLink";
import { defaultTheme } from "../../../../styles/themes/default";
import { useNavigate } from "react-router-dom";
import { GithubIssue } from "../../../../contexts/PostsContext";

interface PostInfoProps {
  post: GithubIssue;
}

export const PostInfo = ({ post }: PostInfoProps) => {
  const navigate = useNavigate();

  function handleVoltar() {
    navigate("/", { flushSync: false, preventScrollReset: true });
  }

  return (
    <PostInfoContainer>
      <nav>
        <VoltarButton onClick={handleVoltar}>
          <FontAwesomeIcon icon={faChevronLeft} />
          <p>VOLTAR</p>
        </VoltarButton>
        <ExternalLink linkTo={"" + post.html_url}>VER NO GITHUB</ExternalLink>
      </nav>
      <PostInfoTitle>{post.title}</PostInfoTitle>
      <ContactContainer>
        <div>
          <FontAwesomeIcon color={defaultTheme["base-label"]} icon={faGithub} />
          <p>{post.user.login}</p>
        </div>
        <div>
          <FontAwesomeIcon
            color={defaultTheme["base-label"]}
            icon={faCalendarDay}
          />
          <p>{"" + post.created_at}</p>
        </div>
        <div>
          <FontAwesomeIcon
            color={defaultTheme["base-label"]}
            icon={faComment}
          />
          <p>{post.comments} comentários</p>
        </div>
      </ContactContainer>
    </PostInfoContainer>
  );
};
