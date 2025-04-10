import styled from "styled-components";

export const ExternalLinkContainer = styled.a`
    display: flex;
    color: ${
       props => props.theme.blue 
    };
    p{
        color: ${
       props => props.theme.blue 
        };
        font-weight: bold;
        font-size: 12px;
    }

    text-decoration: none;
    gap: 8px;
    align-items: center;
    border-bottom: 1px solid transparent;
    &:hover{
        border-bottom: 1px solid ${props => props.theme.blue};
    }
`