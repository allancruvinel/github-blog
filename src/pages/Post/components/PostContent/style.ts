import styled from "styled-components";

export const PostContentContainer = styled.div`
    width: 100%;
    padding: 40px 32px;

    p{
        color: ${
            props => props.theme["base-text"]
        };
    }
    `