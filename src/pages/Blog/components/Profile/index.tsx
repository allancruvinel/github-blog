import {
  AvatarContainer,
  ContactContainer,
  InfoContainer,
  ProfileContainer,
} from "./styles";
import { ExternalLink } from "../../../../components/ExternalLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { GithubUserProfile } from "../../../../contexts/PostsContext";

interface ProfileProps {
  profile: GithubUserProfile;
}

export const Profile = ({ profile }: ProfileProps) => {
  return (
    <ProfileContainer>
      <AvatarContainer src={profile.avatar_url} />
      <InfoContainer>
        <div>
          <h1>{profile.name}</h1>
          <p>{profile.bio}</p>
        </div>
        <ContactContainer>
          <div>
            <FontAwesomeIcon color="white" icon={faGithub} />
            <p>{profile.login}</p>
          </div>
          <div>
            <FontAwesomeIcon color="white" icon={faGithub} />
            <p>{profile.company}</p>
          </div>
          <div>
            <FontAwesomeIcon color="white" icon={faGithub} />
            <p>{profile.followers} seguidores</p>
          </div>
        </ContactContainer>
        <ExternalLink linkTo={profile.html_url}>GITHUB</ExternalLink>
      </InfoContainer>
    </ProfileContainer>
  );
};
