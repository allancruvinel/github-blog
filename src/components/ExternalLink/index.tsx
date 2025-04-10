// This component is a placeholder for a real external link component
// that would open the link in a new tab

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLinkContainer } from "./style";

interface ExternalLinkProps {
  children: React.ReactNode;
  linkTo: string;
}

export function ExternalLink({ children, linkTo }: ExternalLinkProps) {
  return (
    <ExternalLinkContainer
      target="_blank"
      rel="noopener noreferrer"
      href={linkTo}
    >
      <p>{children}</p>
      <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} />
    </ExternalLinkContainer>
  );
}
